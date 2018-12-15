<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;

class Course extends Model
{
    use DataViewer;
    protected $fillable = [
        'name'
    ];
    public static $columns =  [

        [
            'id' => 'id',
            'name' => 'ID'
        ],
        [
            'id' => 'name',
            'name' => 'Name'
        ],
        [
            'id' => 'created_at',
            'name' => 'Create at'
        ],
        [
            'id' => 'updated_at',
            'name' => 'Updated at'
        ]
    ];
    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }
}
