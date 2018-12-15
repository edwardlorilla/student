<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
class Subject extends Model
{
    use DataViewer;
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

    public function semesters()
    {
        return $this->hasMany(Semester::class);
    }
    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }
}
