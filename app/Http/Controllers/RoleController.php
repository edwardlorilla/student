<?php

namespace App\Http\Controllers;

use App\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Role::searchPaginateAndOrder();
        $columns = Role::$columns;
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
        $permissions = [];
        foreach ($request->permissions as $item) {
            $permissions[] = (int)$item;
        }
        $this->validateWith([
            'display_name' => 'required|max:255',
            'name' => 'required|max:100|alpha_dash|unique:roles',
            'description' => 'sometimes|max:255'
        ]);
        $role = new Role();
        $role->display_name = $request->display_name;
        $role->name = $request->name;
        $role->description = $request->description;
        $role->save();
        if ($permissions) {
            $role->syncPermissions($permissions);
        }
        return response()->json('Successfully created the new ' . $role->display_name . ' role in the database.', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Role $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        return response()->json(['role' => Role::whereId($role->id)->with(['permissions' => function($response){
            $response->select('id');
        }])->first(), 'permissions' => \App\Permission::all()]);
    }


    public function create()
    {
        return response()->json(\App\Permission::all());
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Role $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        $this->validateWith([
            'display_name' => 'required|max:255',
            'description' => 'sometimes|max:255'
        ]);
        $permissions = [];
        foreach ($request->permissions as $item) {
            $permissions[] = (int)$item;
        }
        $role->display_name = $request->display_name;
        $role->description = $request->description;
        $role->save();
        if ($request->permissions) {
            $role->syncPermissions($request->permissions);
        }
        return response()->json('Successfully update the '. $role->display_name . ' role in the database.', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Role $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        return response()->json($role->delete(), 204);
    }
}
