<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('meals', function (Blueprint $table) {
            $table->id();
            $table->string('name'); 
            $table->string('meal_time');
            $table->string('calories');
            $table->string('image')->nullable(); 

            $table->foreignId('meal_type_id')->constrained('meal_types')->onDelete('cascade');
            $table->foreignId('meal_class_id')->constrained('meal_classes')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meals');
    }
};
