<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;

class Semester extends Model
{
    use DataViewer;
    protected $fillable = [
        'student_id',
        'schedule_id',
        'year',
        'unit',
        'prelim',
        'midterm',
        'final',
        'ce',
        'remark'
    ];

    public static $columns = [

        [
            'id' => 'id',
            'name' => 'ID'
        ],
        [
            'id' => 'year',
            'name' => 'Create at'
        ],[
            'id' => 'unit',
            'name' => 'Create at'
        ],[
            'id' => 'created_at',
            'name' => 'Create at'
        ],
        [
            'id' => 'updated_at',
            'name' => 'Updated at'
        ]
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function section()
    {
        return $this->belongsTo(Section::class);
    }



}
