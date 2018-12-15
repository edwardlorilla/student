<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->increments('id');
            $table->string('year', 100);
            $table->unsignedInteger('subject_id');
            $table->unsignedInteger('section_id');
            $table->unsignedInteger('user_id');
            $table->integer('unit');
            $table->unsignedInteger('items')->default(0);
            $table->boolean('isConditional')->default(0);
            $table->boolean('isChecked')->default(0);
            $table->foreign('section_id')->references('id')->on('sections');
            $table->foreign('subject_id')->references('id')->on('subjects');
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
        Schema::table('semesters', function (Blueprint $table) {
            $table->unsignedInteger('schedule_id');
            $table->foreign('schedule_id')->references('id')->on('schedules')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
