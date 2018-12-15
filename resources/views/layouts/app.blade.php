
<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'College of Engineering Grading System') }}</title>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
    <!-- Styles -->
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <script>
        window.Laravel = <?php echo json_encode([
            'userId' => !Auth::guest() ? Auth::user()->id : '',
            'roles' => !Auth::guest() ? Auth::user()->roles()->pluck('name')->toArray(): '',
            'permissions' => !Auth::guest() ? Auth::user()->permissions()->pluck('name')->toArray() : ''
        ]); ?>
    </script>
    @yield('css')
</head>
<body class="hold-transition transform login-page sidebar-mini">
@yield('content')
@yield('js')

</body>
</html>
