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


Route::get('/Users/Index', [UserController::class, 'index'])->name('users.index');
Route::get('/Users/Create', [UserController::class, 'create'])->name('users.create');
Route::post('/users', [UserController::class, 'store'])->name('users.store');


Route::post('/logout', function () {
    sleep(2);
    dd(request('foo'));
});

Route::resource('/posts', PostController::class);