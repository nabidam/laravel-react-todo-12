<?php

use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

Route::get('/', [TodoController::class, 'index'])->name('home');
// Route::delete('/', [TodoController::class, 'index'])->name('home');

Route::resource('todo', TodoController::class);