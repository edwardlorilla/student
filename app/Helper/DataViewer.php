<?php
namespace App\Helper;

use Validator;

trait DataViewer
{

    protected $operators = [
        'equal' => '=',
        'not_equal' => '<>',
        'less_than' => '<',
        'greater_than' => '>',
        'less_than_or_equal_to' => '<=',
        'greater_than_or_equal_to' => '>=',
        'in' => 'IN',
        'like' => 'LIKE'
    ];

    protected function isRelatedColumn($request)
    {
        return strpos($request->search_column, '.') !== false;
    }
    protected function buildQuery($column, $operator, $request, $query)
    {
        switch ($operator) {
            case 'equal_to':
            case 'not_equal':
            case 'less_than':
            case 'greater_than':
            case 'less_than_or_equal_to':
            case 'greater_than_or_equal_to':
                $query->where($column, $this->operators[$operator], $request->search_input);
                break;
            case 'in':
                $query->whereIn($column, explode(',', $request->search_input));
                break;
            case 'not_in':
                $query->whereNotIn($column, explode(',', $request->search_input));
                break;
            case 'like':
                $query->where($column, 'like', '%'.$request->search_input.'%');
                break;
            default:
                throw new Exception('Invalid Search Operator', 1);
                break;
        }
        return $query;
    }
    public function scopeSearchPaginateAndOrder($query)
    {


        $queries = [];
        $request = app()->make('request');

        $v = Validator::make($request->only([
            'column', 'direction', 'per_page',
            'search_column', 'search_operator', 'search_input'
        ]), [
        'column' => 'alpha_dash|in:' . implode(',', array_column(self::$columns, 'id')),
        'direction' => 'in:asc,desc',
        'per_page' => 'integer|min:1',
        'search_column' => '',
        'search_operator' => 'alpha_dash|in:' . implode(',', array_keys($this->operators)),
        'search_input' => 'max:255'
    ]);

        if ($v->fails()) {
            throw new \Illuminate\Validation\ValidationException($v);
        }

        if ($request->has('column') && $request->has('direction')) {
            $query = $query->orderBy($request->column, $request->direction);
            $queries['column'] = request('column');
            $queries['direction'] = request('direction');
        }else {
            $query = $query->orderBy('updated_at', 'desc');
        }


        if (count($request->search_column)) {

            $query = $query->where(function ($query) use ($request) {
                if ($request->has('search_input') && $request->search_input) {
                    if($this->isRelatedColumn($request)) {


                        list($relation, $relatedColumn) = explode('.', $request->search_column);
                        return $query->whereHas($relation, function($query) use ($relatedColumn, $request) {
                            return $this->buildQuery(
                                $relatedColumn,
                                $request->search_operator,
                                $request,
                                $query
                            );
                        });
                    }
                    else if ($request->search_operator == 'in' && $request->search_column != 'all') {
                        $query->whereIn($request->search_column, explode(',', $request->search_input));
                    } else if ($request->search_operator == 'like' && $request->search_column != 'all') {
                        $query->where($request->search_column, 'LIKE', '%' . $request->search_input . '%');
                    } else if ($request->search_column == 'all') {
                        foreach (array_column(self::$columns, 'id') as $keyword) {
                            if ($request->search_operator == 'like') {
                                $query = $query->orWhere($keyword, 'LIKE', '%' . $request->search_input . '%');
                            } else if ($request->search_operator == 'in') {
                                $query = $query->orWhereIn($keyword, explode(',', $request->search_input));
                            } else {
                                $query = $query->orWhere($keyword, $this->operators[$request->search_operator], $request->search_input);
                            }
                        }
                    } else {
                        $query->where($request->search_column, $this->operators[$request->search_operator], $request->search_input);
                    }
                }
            });
        }

        return $queries ? $query->paginate($request->per_page)->appends($queries) : $query->paginate($request->per_page);
    }



}