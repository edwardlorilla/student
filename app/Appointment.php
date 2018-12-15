<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'day',
        'start_time',
        'end_time',
        'room',
    ];

    public function schedules()
    {
        return $this->belongsToMany(Schedule::class);
    }
}
