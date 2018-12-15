<template>
    <div v-if="schedule" style="padding: 10px 15px;">
        <div class="row">
            <div class="col-md">
                <span style="font-weight: bold;">SUBJECT: </span>{{schedule.subject ? schedule.subject.name :''}}
            </div>
            <div class="col-md">
                <span style="font-weight: bold;">DESCRIPTION: </span>{{schedule.subject ? schedule.subject.description : ''}}
            </div>
            <div class="col-md">
                <span style="font-weight: bold;">UNITS: </span>{{schedule.unit}}
            </div>
        </div>
        <div class="row">
            <div class="col-md">
                <span style="font-weight: bold;">COURSE: </span>{{schedule.course ? schedule.course.name : ''}}
            </div>
            <div class="col-md">
                <span style="font-weight: bold;">SEM/YEAR: </span>{{schedule.semester === 1 ? '1st Semester' : ''}}
            </div>
            <div class="col-md">
                <span style="font-weight: bold;">CLASS: </span>{{schedule.section ? schedule.section.name : ''}}
            </div>
        </div>
        <div class="row">
            <div class="col-md">
                <span style="font-weight: bold;">SEM/YEAR: </span><span v-for="appointment in schedule.appointments">{{$root.clock(appointment.start_time)}}-{{$root.clock(appointment.end_time)}}/{{appointment.day}}/ROOM-{{appointment.room}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['schedule']
    }
</script>
