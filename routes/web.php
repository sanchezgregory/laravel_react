<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::middleware('auth')->group(function(){
    Route::get('users',[UserController::class, 'index'])->name('users.index')->middleware('admin');
});
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
