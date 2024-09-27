<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


//Aseel routes start

//Aseel routes ends

//Amal routes start

//Amal routes ends

//Fajer routes start

//Fajer routes ends

//Tala routes start

//Tala routes ends

//Dania routes start

//Dania routes ends

//Dalia routes start
use App\Http\Controllers\SubscriptionController;

Route::get('/bookings', [SubscriptionController::class, 'index'])->name('bookings.index');
Route::get('/bookings/book/{id}', [SubscriptionController::class, 'book'])->name('bookings.book');

//Dalia routes ends
