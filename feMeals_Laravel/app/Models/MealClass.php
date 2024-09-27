<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealClass extends Model
{
    use HasFactory;

    protected $fillable = ['name','price', 'meal_num', 'description', 'image', 'meal_type_id'];

    // Relationships
    public function mealType()
    {
        return $this->belongsTo(MealType::class, 'meal_type_id');
    }

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

    public function meals()
    {
        return $this->hasMany(Meal::class);
    }
}
