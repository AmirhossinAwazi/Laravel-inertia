<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Sleep;
use Inertia\Inertia;

Route::get('/', function(){
    return Inertia::render('Post/Index', [
        'time' => now()->toTimeString(),
    ]);
});

Route::get('/Settings', function(){
    return Inertia::render('Users/Settings');
});

// Route::get('/Users/Index', [UserController::class, 'index']);

Route::get('/Users/Create', function() {
    return Inertia::render('Users/Create');
});

Route::get('/Users/Index', [UserController::class, 'index'])->name('users.index');
Route::post('/users', [UserController::class, 'store'])->name('users.store');

// Route::post('/Users', [UserController::class, 'store']);

Route::post('/logout', function () {
    sleep(2);
    dd(request('foo'));
});

Route::resource('/posts', PostController::class);