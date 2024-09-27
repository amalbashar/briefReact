<?php
use App\Http\Controllers\UserDashboardController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// use App\Http\Controllers\FoodMenuController;





//Aseel routes start
use App\Http\Controllers\AdminController;

Route::get('/admin/users', [AdminController::class, 'index']);
Route::get('/admin/dashboard', [AdminController::class, 'dashboard']);
Route::get('/admin/subscriptions', [AdminController::class, 'getSubscriptions']);
Route::post('/admin/subscriptions/{id}/status', [AdminController::class, 'updateSubscriptionStatus']);

// url : http://127.0.0.1:8000/api/admin/users

//Aseel routes ends

//Amal routes start
use App\Http\Controllers\FoodMenuController;

Route::get('/food-menu', [FoodMenuController::class, 'getMeals']);
Route::get('/food-menu-v4', [FoodMenuController::class, 'getFoodMenu']);



//Amal routes ends

//Fajer routes start
Route::get('/user', [UserDashboardController::class, 'getUserData']);

//Fajer routes ends

//Tala routes start

//Tala routes ends

//Dania routes start

//Dania routes ends

//Dalia routes start

//Dalia routes ends
