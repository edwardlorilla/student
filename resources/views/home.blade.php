@extends('layouts.app')

@section('css')
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}"/>
@endsection
@section('js')
    <script type="text/javascript" src="{{mix('/js/app.js')}}"></script>
@endsection
@section('content')
    <div id="app"></div>
@endsection
