<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(LaratrustSeeder::class);
		DB::table('settings')->insert(
            array('name' => 'College of Engineering ', 'dean' => 'De Vera, Angel V. Jr.')
        );DB::table('sections')->insert(
            array('name' => 'EC-4-1')
        );DB::table('courses')->insert(
            array('name' => 'ECE')
        );DB::table('subjects')->insert(
            array('name' => 'ECE-525a', 'description' => 'industrial electronics')
        );
    }
}
