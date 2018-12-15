<?php

namespace App\Http\Controllers;

use App\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Course::searchPaginateAndOrder();
        $columns = Course::$columns;
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255|unique:courses,name',
        ]);
        $course = new Course;
        $course->name = $request->name;
        $course->save();
        return response()->json('Course ' . $course->name .' were all successfully added', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        return response()->json($course, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Course $course)
    {
        $request->validate([
            'name' => 'required|max:255|unique:courses,name,' . (int) $course->id ,
        ]);
        $course->name = $request->name;
        $course->save();
        return response()->json('Course ' . $request->name .' were all successfully updated', 200);
    }
    public function search()
    {
        $select = new Course;
        if (request()->has('search')) {
            $select = Course::where('name', 'LIKE', '%' . request('search') . "%")->get();
        }
        return response()->json($select, 200);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy(Course $course)
    {
        return response()->json($course->delete(), 204 );
    }
}
