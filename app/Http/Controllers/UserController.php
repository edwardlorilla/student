<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Notifications;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = User::searchPaginateAndOrder();
        $columns = User::$columns;
        return response()
        ->json([
            'model' => $model,
            'columns' => $columns
        ]);
    }

    public function create()
    {
        $roles = \App\Role::with('permissions')->get();

        return response()->json(['roles' => $roles], 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $this->validate($request, [
            'name' => 'required',
            'first_name' => 'required',
            'middle_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users,email,' . (int) $request->id ,
            'address' => '' ,
            'phone' => '' ,
        ]);

        if (!empty($request->password)) {
            $input['password'] = bcrypt($request->password);
        } else {
            # set the manual password
            $length = 10;
            $keyspace = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
            $str = '';
            $max = mb_strlen($keyspace, '8bit') - 1;
            for ($i = 0; $i < $length; ++$i) {
                $str .= $keyspace[random_int(0, $max)];
            }
//            $input['password'] = bcrypt($str);
            $input['password'] = bcrypt('password');

        }


        $model = User::updateOrCreate(
            ['id' => $request->id],
            $input
        );
        if ($request->roles) {
            $model->syncRoles(json_decode($request->roles))->notify(new Notifications\VerifyEmail);
        }
        /*if ($request->permissions) {
            $model->syncPermissions($request->permissions);
        }*/
        return response()->json('User was successfully updated!', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $roles = \App\Role::all();
        $permissions = \App\Permission::all();
        return response()->json(['user' => User::where('id', $user->id)->with('roles', 'permissions')->first(), 'roles' => $roles, 'permissions' => $permissions], 200);
    }
    public function edit(User $user)
    {
        return response()->json($user, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $this->validate($request, [
            'old_password'     => 'required',
            'new_password'     => 'required|min:6',
            'confirm_password' => 'required|same:new_password',
        ]);
        $data = $request->all();
        if(!Hash::check($data['old_password'], $user->password)){
            return response()->json('The specified password does not match the database password', 500);
        }else{
            return response()->json($user->update(['password' => bcrypt($request->new_password) ]), 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
}
