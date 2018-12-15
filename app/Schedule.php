<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;

class Schedule extends Model
{
    use DataViewer;
    protected $fillable = [
        'section_id',
        'subject_id',
        'course_id',
        'year',
        'unit',
        'semester',
        'items',
        'isConditional',
        'isChecked'
    ];
    public static $columns = [
        [
            'id' => 'id',
            'name' => 'Schedule Code'
        ],
        [
            'id' => 'user.last_name',
            'name' => 'Teacher'
        ], [
            'id' => 'created_at',
            'name' => 'Create at'
        ], [
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

    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function appointments()
    {
        return $this->belongsToMany(Appointment::class);
    }
}
