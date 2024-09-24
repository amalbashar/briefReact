<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Meal;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Meal>
 */
class MealFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Meal::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'type' => $this->faker->randomElement(['Breakfast', 'Lunch', 'Dinner', 'Snack']),
            'meal_type_id' =>  $this->faker->numberBetween(1, 4),
            'meal_class_id' => $this->faker->numberBetween(1, 9),
        ];
    }
}
