<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;

class Student extends Model
{
    use DataViewer;
    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name'
    ];
    public static $columns = [

        [
            'id' => 'id',
            'name' => 'ID'
        ],
        [
            'id' => 'first_name',
            'name' => 'First Name'
        ],[
            'id' => 'middle_name',
            'name' => 'Middle Name'
        ],[
            'id' => 'last_name',
            'name' => 'Last Name'
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
}
