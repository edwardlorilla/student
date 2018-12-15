<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSemestersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('semesters', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('student_id');
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('student_id')->references('id')->on('students');
            $table->string('remark')->nullable(); //passed = 1, failed = 2, drop = 3
            $table->decimal('prelim', 5, 2)->nullable()->default(0);
            $table->decimal('midterm', 5, 2)->nullable()->default(0);
            $table->decimal('final', 5, 2)->nullable()->default(0);
            $table->decimal('ce', 5, 2)->nullable()->default(0); //(final grade * 0.30) + (ce * 0.70)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('semesters');
    }
}
