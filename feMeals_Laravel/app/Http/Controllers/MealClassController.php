<?php

namespace App\Http\Controllers;

use App\Models\MealClass; // Ensure you import the MealClass model
use Illuminate\Http\Request;

class MealClassController extends Controller
{
    // Fetch meal classes based on meal_type_id
    public function getShopPageContent($meal_type_id)
    {
        // Query the MealClass model to get classes by meal_type_id
        $mealClasses = MealClass::where('meal_type_id', $meal_type_id)
            ->select('id', 'name', 'price', 'description', 'image') // Specify the fields to return
            ->get();

        // Return the data as JSON response
        return response()->json($mealClasses);
    }
}
