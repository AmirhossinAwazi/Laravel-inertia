<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Sleep;
use Inertia\Inertia;

Route::get('/', function(){
    return Inertia::render('Post/Index', [
        'time' => now()->toTimeString(),
    ]);
});

Route::get('/Settings', function(){
    return Inertia::render('Examples/Settings');
});

Route::get('/Users', function(){
    return Inertia::render('Examples/Users');
});

Route::post('/logout', function () {
    sleep(2);
    dd(request('foo'));
});

Route::resource('/posts', PostController::class);