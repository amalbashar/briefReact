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

use App\Http\Controllers\FoodMenuController;





//Aseel routes start
use App\Http\Controllers\AdminController;

Route::get('/admin/users', [AdminController::class, 'index']);
Route::get('/admin/dashboard', [AdminController::class, 'dashboard']);
Route::get('/admin/subscriptions', [AdminController::class, 'getSubscriptions']);
Route::post('/admin/subscriptions/{id}/status', [AdminController::class, 'updateSubscriptionStatus']);

Route::get('/users', [AdminController::class, 'getUsers']);
Route::put('/admin/users/{id}', [AdminController::class, 'updateUser']);
Route::delete('/admin/users/{id}', [AdminController::class, 'deleteUser']);

Route::get('/admin/meal-classes', [AdminController::class, 'getMealClasses']);
 Route::put('/admin/meal-classes/{id}', [AdminController::class, 'updateMealClass']);
 Route::delete('/admin/meal-classes/{id}', [AdminController::class, 'deleteMealClass']);

Route::get('/admin/meal-types', [AdminController::class, 'indexmealtype']);
Route::put('/admin/meal-types/{id}', [AdminController::class, 'updatemealtype']);
Route::delete('/admin/meal-types/{id}', [AdminController::class, 'destroymealtype']);

Route::get('/admin/meals', [AdminController::class, 'indexmeal']);
Route::put('/admin/meals/{id}', [AdminController::class, 'updatemeal']);
Route::delete('/admin/meals/{id}',[ AdminController::class, 'destroymeal']);

Route::get('/admin/user/{id}', [AdminController::class, 'getUserProfileAdmin']);
Route::post('/admin/user/{id}/update', [AdminController::class, 'updateUserProfileAdmin']);

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
use App\Http\Controllers\AuthController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
//Tala routes ends

//Dania routes start

//Dania routes ends

//Dalia routes start
use App\Http\Controllers\MealController;

Route::get('/dalia/meal-classes/{meal_type_id}', [MealController::class, 'getMealClasses']);
//Dalia routes ends
