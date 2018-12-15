<?php

namespace App;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laratrust\Traits\LaratrustUserTrait;
use App\Helper\DataViewer;
use Illuminate\Contracts\Auth\MustVerifyEmail;
class User extends Authenticatable implements MustVerifyEmail
{
    use LaratrustUserTrait, HasApiTokens, Notifiable, DataViewer;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'first_name', 'middle_name', 'last_name', 'email', 'password', 'photo_id'
    ];
    public function photo()
    {
        return $this->belongsTo(Photo::class);
    }
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public static $columns =  [

        [
            'id' => 'id',
            'name' => 'ID'
        ],
        [
            'id' => 'name',
            'name' => 'User Namw'
        ],[
            'id' => 'first_name',
            'name' => 'First Name'
        ],[
            'id' => 'middle_name',
            'name' => 'Middle Name'
        ],[
            'id' => 'last_name',
            'name' => 'Last Name'
        ],
        [
            'id' => 'email',
            'name' => 'Email'
        ],
        [
            'id' => 'created_at',
            'name' => 'Create at'
        ],
        [
            'id' => 'updated_at',
            'name' => 'Updated at'
        ]
    ];
    /**
     * App\Post::find(1)->semesters;
     *insert - auth()->user()->semesters()->save(new Announcement($validateData));
     *update - auth()->user()->semesters()->where('id', id)->update($validateData);
     *delete - auth()->user()->semesters()->where('id', id)->delete();
     */
    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }public function semesters()
    {
        return $this->hasMany(Semester::class);
    }
}
