<?php

namespace App\Http\Controllers;

use App\Semester;
use Illuminate\Http\Request;

class SemesterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        dd($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Semester $semester
     * @return \Illuminate\Http\Response
     */
    public function show(Semester $semester)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Semester $semester
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Semester $semester)
    {
        $semester->update($request->all());
        if ((double)$semester->prelim != 0 && (double)$semester->midterm != 0 && (double)$semester->final != 0 && $semester->remark !== 'DROP' && $semester->remark !== 'INC' && $semester->remark !== 'AW/UW') {
            $x = ((double)$semester->prelim * 0.40);
            $y = ((((double)$semester->midterm + (double)$semester->final) / 2) * 0.60);
            $result = $x + $y;
            $gradeEquivalent = $this->GradeEquivalent($result);
            if($gradeEquivalent >= 1 && $gradeEquivalent <= 3){
                $semester->remark = 'PASSED';
            }else if($gradeEquivalent == 5){
                $semester->remark = 'FAILED';
            }else{
                $semester->remark = '';
            }
            $semester->save();

        }
        return response()->json($semester, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Semester $semester
     * @return \Illuminate\Http\Response
     */
    public function destroy(Semester $semester)
    {
        $semester->delete();
        return response()->json($semester, 204);
    }

    /**
     * @param $result
     */
    public function GradeEquivalent($result)
    {
        if ($result >= 98 && $result <= 100) {
            return 1.00;
        } else if ($result >= 97 && $result <= 95) {
            return 1.25;
        } else if ($result >= 92 && $result <= 94) {
            return 1.50;
        } else if ($result >= 90 && $result <= 93) {
            return 1.75;
        } else if ($result >= 86 && $result <= 89) {
            return 2.00;
        } else if ($result >= 83 && $result <= 85) {
            return 2.25;
        } else if ($result >= 80 && $result <= 84) {
            return 2.50;
        } else if ($result >= 77 && $result <= 83) {
            return 2.75;
        } else if ($result >= 75 && $result <= 82) {
            return 3.00;
        } else if ($result > 0 && $result <= 74) {
            return 5.00;
        }
    }
}
