<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/login', function () {
    $setting = \App\Setting::select('name')->first();
    return response()->json($setting, 200);
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    $setting = \App\Setting::with('photo')->first();
    return response()->json(['user' => \App\User::whereId($request->user()->id)->with('roles', 'photo')->first(), 'setting' => $setting], 200);
});
Route::middleware(['auth:api'])->group(function () {
    Route::post('/students/add', 'StudentController@add');
    Route::get('/schedules/print/{schedule}', 'DashboardController@getPrint');
    Route::get('/sections/search', 'SectionController@search');
    Route::get('/subjects/search', 'SubjectController@search');
    Route::get('/courses/search', 'CourseController@search');
    Route::get('/users/edit/{user}', 'UserController@edit');
    Route::get('/users/create', 'UserController@create');
    Route::get('/roles/create', 'RoleController@create');
    Route::apiResources([
        '/users' => 'UserController',
        '/students' => 'StudentController',
        '/semesters' => 'SemesterController',
        '/uploads' => 'UploadController',
        '/subjects' => 'SubjectController',
        '/permissions' => 'PermissionController',
        '/sections' => 'SectionController',
        '/courses' => 'CourseController',
        '/roles' => 'RoleController',
        '/settings' => 'SettingController',
        '/schedules' => 'DashboardController',
    ]);

});