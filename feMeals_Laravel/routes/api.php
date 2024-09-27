<?php

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





//Aseel routes start
use App\Http\Controllers\AdminController;

Route::get('/admin/users', [AdminController::class, 'index']);
// url : http://127.0.0.1:8000/api/admin/users

//Aseel routes ends

//Amal routes start

use App\Http\Controllers\FoodMenuController;

Route::get('/food-menu', [FoodMenuController::class, 'getMeals']);
Route::get('/food-menu-v4', [FoodMenuController::class, 'getFoodMenu']);



//Amal routes ends

//Fajer routes start

//Fajer routes ends

//Tala routes start

//Tala routes ends

//Dania routes start

//Dania routes ends

//Dalia routes start
use App\Http\Controllers\MealClassController;

// Route::get('/meal-classes', [MealClassController::class, 'index']);


// routes/api.php



Route::get('/ShopPageContent/{meal_type_id}', [MealClassController::class, 'getShopPageContent']);


//Dalia routes ends
