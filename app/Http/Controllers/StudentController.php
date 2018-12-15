<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Student::searchPaginateAndOrder();
        $columns = Student::$columns;
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validateWith([
            'student' => 'required',
            'year' => 'required',
            'course' => 'required',
            'section' => 'required',
            'unit' => 'required',
            'semester' => 'required',
            'subject' => 'required',
        ]);
        $section = json_decode($request->section);
        $subject = json_decode($request->subject);
        $course = json_decode($request->course);
        $year = $request->year;
        $unit = $request->unit;
        $schedule = auth()->user()->schedules()->updateOrCreate(
            [
                'course_id' => $course,
                'section_id' => $section,
                'subject_id' => $subject,
                'unit' => $unit
            ],
            ['year' => $year, 'section_id' => $section, 'subject_id' => $subject, 'user_id' => auth()->id()]
        );
        $appointmentId = [];
        $semesterId = [];
        foreach (json_decode($request->student) as $item) {
            $studentArray = ['first_name' => $item->first_name, 'middle_name' => $item->middle_name, 'last_name' => $item->last_name];
            $student = \App\Student::updateOrCreate(
                $studentArray,
                $studentArray
            );
            $semesterId[] = auth()->user()->semesters()->save(new \App\Semester(
                    [
                        'schedule_id' => $schedule->id,
                        'student_id' => $student->id
                    ])
            )->id;

        }

        foreach (json_decode($request->www) as $item) {
            $appointment = new \App\Appointment;
            $appointment->day = $item->day;
            $appointment->start_time = $item->start_time;
            $appointment->end_time = $item->end_time;
            $appointment->room = $item->room;
            $appointment->save();
            $appointmentId[] = $appointment->id;
        }

        foreach ($semesterId as $id) {
            $schedule->appointments()->sync($appointmentId);
        }
        return response()->json('Successfully insert');
    }

    public function add(Request $request){
        $studentArray = ['first_name' => $request->first_name, 'middle_name' => $request->middle_name, 'last_name' => $request->last_name];
        $studentId = Student::updateOrCreate(
            $studentArray,
            $studentArray
        )->id;
        auth()->user()->semesters()->save(new \App\Semester(
                [
                    'schedule_id' => $request->id,
                    'student_id' => $studentId
                ])
        );
        return response()->json($studentId, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Student $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Student $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Student $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        //
    }
}
