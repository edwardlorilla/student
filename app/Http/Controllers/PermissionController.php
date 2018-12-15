<?php

namespace App\Http\Controllers;

use App\Permission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Permission::searchPaginateAndOrder();
        $columns = Permission::$columns;
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
        if ($request->permission_type == 'basic') {
            $this->validateWith([
                'display_name' => 'required|max:255',
                'name' => 'required|max:255|alphadash|unique:permissions,name',
                'description' => 'sometimes|max:255'
            ]);

            $permission = new Permission();
            $permission->name = $request->name;
            $permission->display_name = $request->display_name;
            $permission->description = $request->description;
            $permission->save();

            return response()->json('Permissions were all successfully added', 200);

        } elseif ($request->permission_type == 'crud') {
            $this->validateWith([
                'resource' => 'required|min:3|max:100|alpha'
            ]);

            $crud = $request->crud_selected;
            if (count($crud) > 0) {
                foreach ($crud as $x) {
                    $slug = strtolower($x) . '-' . strtolower($request->resource);
                    $display_name = ucwords($x . " " . $request->resource);
                    $description = "Allows a user to " . strtoupper($x) . ' a ' . ucwords($request->resource);

                    $permission = new Permission();
                    $permission->name = $slug;
                    $permission->display_name = $display_name;
                    $permission->description = $description;
                    $permission->save();
                }
                return response()->json('Permissions were all successfully added', 200);
            }
        } else {
            return response()->json();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function show(Permission $permission)
    {
        return response()->json($permission);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Permission  $permission
         * @return \Illuminate\Http\Response
         */
        public function update(Request $request, Permission $permission)
        {
            $this->validateWith([
            'display_name' => 'required|max:255',
            'description' => 'sometimes|max:255'
        ]);
        $permission->display_name = $request->display_name;
        $permission->description = $request->description;
        $permission->save();
        return response()->json('Updated the '. $permission->display_name . ' permission.', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function destroy(Permission $permission)
    {
        return response()->json($permission->delete(), 204);
    }
}
