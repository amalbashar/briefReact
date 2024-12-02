<?php
namespace App\Http\Controllers;

use App\Models\MealClass;
use Illuminate\Http\Request;

class MealController extends Controller
{
    public function getMealClasses($meal_type_id)
    {
        // Fetch the meal classes based on meal_type_id
        $mealClasses = MealClass::where('meal_type_id', $meal_type_id)->get();
        return response()->json($mealClasses);
    }
}
