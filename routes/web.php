<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Sleep;
use Inertia\Inertia;

Route::get('/', function(){
    // Sleep(2);
    return Inertia::render('Index', [
        'time' => now()->toTimeString(),
    ]);
});

Route::post('/logout', function () {
    sleep(2);
    dd(request('foo'));
});

Route::resource('/posts', PostController::class);