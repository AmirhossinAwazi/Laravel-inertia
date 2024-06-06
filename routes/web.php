<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(){
    return Inertia::render('Index');
});
Route::resource('/posts', PostController::class);
