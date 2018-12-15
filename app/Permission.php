<?php

namespace App;

use Laratrust\Models\LaratrustPermission;
use App\Helper\DataViewer;
class Permission extends LaratrustPermission
{
    use DataViewer;
    protected $fillable = [
        'name', 'display_name', 'description'
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
            'id' => 'display_name',
            'name' => 'Display Name'
        ],
        [
            'id' => 'description',
            'name' => 'Description'
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
