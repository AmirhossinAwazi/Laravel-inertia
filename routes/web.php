<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(){
    return Inertia::render('Post/Index', [
        'time' => now()->toTimeString(),
    ]);
});

Route::resource('users', UserController::class);

Route::resource('/posts', PostController::class);

Route::post('/logout', function () {
    sleep(2);
    dd(request('foo'));
});

