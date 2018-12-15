<?php

namespace App\Http\Controllers;

use App\Schedule;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = auth()->user()->hasRole('faculty')
            ? Schedule::whereUserId(auth()->id())->with('user', 'course', 'section', 'subject')->withCount('semesters')->searchPaginateAndOrder()
            : Schedule::with('user', 'course', 'section', 'subject')->withCount('semesters')->searchPaginateAndOrder();
        $columns = [

            [
                'id' => 'user.last_name',
                'name' => 'User'
            ],[
                'id' => 'course.name',
                'name' => 'Course'
            ], [
                'id' => 'section.name',
                'name' => 'Section'
            ], [
                'id' => 'subject.name',
                'name' => 'Subject'
            ], [
                'id' => 'semesters_count',
                'name' => 'Enrolled Students'
            ], [
                'id' => 'created_at',
                'name' => 'Created at'
            ],
            [
                'id' => 'updated_at',
                'name' => 'Updated at'
            ]
        ];
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Schedule $schedule
     * @return \Illuminate\Http\Response
     */
    public function show(Schedule $schedule)
    {
        $model = \App\Semester::where('schedule_id', $schedule->id)->with(['student'])->searchPaginateAndOrder();
        $columns = [
            [
                'id' => 'student.first_name',
                'name' => 'First Name'
            ], [
                'id' => 'student.middle_name',
                'name' => 'Middle Name'
            ], [
                'id' => 'student.last_name',
                'name' => 'Last Name'
            ], [
                'id' => 'prelim',
                'name' => 'Prelim'
            ], [
                'id' => 'midterm',
                'name' => 'Midterm'
            ], [
                'id' => 'final',
                'name' => 'Final'
            ], [
                'id' => 'unit',
                'name' => 'unit'
            ],

        ];
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns,
                'schedules' => Schedule::whereId($schedule->id)->with('user', 'course', 'section', 'subject', 'appointments')->first()
            ]);
    }

    public function getPrint(Schedule $schedule)
    {
        return response()->json([
            'students' => \App\Semester::where('schedule_id', $schedule->id)->with('student')->get(),
            'schedule' => Schedule::whereId($schedule->id)->with('user', 'course', 'section', 'subject', 'appointments')->first()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Schedule $schedule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Schedule $schedule)
    {
        return response()->json($schedule->update($request->all()), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Schedule $schedule
     * @return \Illuminate\Http\Response
     */
    public function destroy(Schedule $schedule)
    {
        return response()->json($schedule->delete(), 204);
    }
}
