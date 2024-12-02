<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\MealClass;

class MealClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Keto Meal Classes
        MealClass::create([
            'name' => 'Basic',
            'price' => 30,
            'meal_num' => 1,
            'description' => 'Basic subscription includes 1 meal per day, 5 days a week, designed for keto diet.',
            'meal_type_id' => 1 // Keto
        ]);
        MealClass::create([
            'name' => 'Premium',
            'price' => 50,
            'meal_num' => 2,
            'description' => 'Premium subscription includes 2 meals per day, 5 days a week, designed for keto diet.',
            'meal_type_id' => 1
        ]);
        MealClass::create([
            'name' => 'VIP',
            'price' => 80,
            'meal_num' => 4,
            'description' => 'VIP subscription includes 4 meals per day, 5 days a week, designed for keto diet.',
            'meal_type_id' => 1
        ]);

        // Vegan Meal Classes
        MealClass::create([
            'name' => 'Basic',
            'price' => 20,
            'meal_num' => 1,
            'description' => 'Basic subscription includes 1 meal per day, 5 days a week, designed for vegan diet.',
            'meal_type_id' => 2 // Vegan
        ]);
        MealClass::create([
            'name' => 'Premium',
            'price' => 30,
            'meal_num' => 2,
            'description' => 'Premium subscription includes 2 meals per day, 5 days a week, designed for vegan diet.',
            'meal_type_id' => 2
        ]);
        MealClass::create([
            'name' => 'VIP',
            'price' => 50,
            'meal_num' => 4,
            'description' => 'VIP subscription includes 4 meals per day, 5 days a week, designed for vegan diet.',
            'meal_type_id' => 2
        ]);

        // Healthy Meal Classes
        MealClass::create([
            'name' => 'Basic',
            'price' => 40,
            'meal_num' => 1,
            'description' => 'Basic subscription includes 1 meal per day, 5 days a week, designed for healthy diet.',
            'meal_type_id' => 3 // Healthy
        ]);
        MealClass::create([
            'name' => 'Premium',
            'price' => 50,
            'meal_num' => 2,
            'description' => 'Premium subscription includes 2 meals per day, 5 days a week, designed for healthy diet.',
            'meal_type_id' => 3
        ]);
        MealClass::create([
            'name' => 'VIP',
            'price' => 70,
            'meal_num' => 4,
            'description' => 'VIP subscription includes 4 meals per day, 5 days a week, designed for healthy diet.',
            'meal_type_id' => 3
        ]);

        // Diabetes Meal Classes
        MealClass::create([
            'name' => 'Basic',
            'price' => 20,
            'meal_num' => 1,
            'description' => 'Basic subscription includes 1 meal per day, 5 days a week, designed for diabetes-friendly diet.',
            'meal_type_id' => 4 // Diabetes
        ]);
        MealClass::create([
            'name' => 'Premium',
            'price' => 40,
            'meal_num' => 2,
            'description' => 'Premium subscription includes 2 meals per day, 5 days a week, designed for diabetes-friendly diet.',
            'meal_type_id' => 4
        ]);
        MealClass::create([
            'name' => 'VIP',
            'price' => 70,
            'meal_num' => 4,
            'description' => 'VIP subscription includes 4 meals per day, 5 days a week, designed for diabetes-friendly diet.',
            'meal_type_id' => 4
        ]);
    }
}
