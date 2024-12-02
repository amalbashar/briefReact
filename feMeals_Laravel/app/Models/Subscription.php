<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'meal_class_id', 'start_date', 'end_date', 'status', 'delivery_info', 'approved_by',];

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class,  'user_id');
    }

    public function mealClass()
    {
        return $this->belongsTo(MealClass::class, 'meal_class_id');
    }

    // testttttt
    // testttttt

}
