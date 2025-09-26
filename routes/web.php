<?php

use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

Route::get('/', [TodoController::class, 'index'])->name('home');
Route::post('/', [TodoController::class, 'store'])->name('store');
Route::patch('/{todo}/done', [TodoController::class, 'toggleDone'])->name('done');
Route::delete('/{todo}', [TodoController::class, 'destroy'])->name('destroy');
