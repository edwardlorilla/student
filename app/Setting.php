<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'name',
        'dean'
    ];
    public function photo()
    {
        return $this->belongsTo(Photo::class);
    }
}
