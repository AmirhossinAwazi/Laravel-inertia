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

Route::resource('/posts', PostController::class);