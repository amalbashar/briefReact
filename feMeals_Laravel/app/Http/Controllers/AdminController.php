<?php

namespace App\Http\Controllers;

use Illuminate\Support\Carbon;
use App\Models\Subscription;
use Illuminate\Support\Facades\Hash;
use App\Models\MealClass;
use App\Models\MealType;
use App\Models\User;
use App\Models\Meal;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $users = User::with('role')->get();

        return response()->json($users);
    }

    public function dashboard()
    {
        // Retrieve user with ID 2 (static for now)
        $user = User::find(2);

        $totalProfit = Subscription::whereMonth('start_date', Carbon::now()->month)
            ->whereYear('start_date', Carbon::now()->year)
            ->join('meal_classes', 'subscriptions.meal_class_id', '=', 'meal_classes.id')
            ->sum('meal_classes.price'); // Summing the price from meal_classes

        // Count the number of subscriptions for the current month
        $subscriptionCount = Subscription::whereMonth('start_date', Carbon::now()->month)
            ->whereYear('start_date', Carbon::now()->year)
            ->count();

        // Return both total profit and subscription count in one response
        return response()->json([
            'user' => $user,

            'totalProfit' => $totalProfit,
            'subscriptionCount' => $subscriptionCount
        ]);
    }

    public function getSubscriptions()
    {
        // Fetch subscriptions with related mealClass and mealType
        $subscriptions = Subscription::with(['mealClass.mealType', 'user'])->get();
        return response()->json($subscriptions);
    }

    public function updateSubscriptionStatus($id, Request $request)
    {
        // Assuming you're using a static user ID for now, update accordingly if needed
        $user = User::find(2); // Fetch the user who is approving the subscription

        // Find the subscription by its ID
        $subscription = Subscription::find($id);
        $subscription->status = $request->status;
        $subscription->approved_by = $user->name; // Set the approver's name

        // Save the updated subscription
        $subscription->save();

        // Return the updated subscription data to the frontend
        return response()->json([
            'message' => 'Subscription status updated successfully',
            'subscription' => $subscription // Send the updated subscription
        ]);
    }

    public function getUsers()
    {
        $users = User::all(); // Fetch all users
        return response()->json($users);
    }

    // Update a user
    public function updateUser(Request $request, $id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        // Optionally, you can update the password
        if ($request->password) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        return response()->json(['message' => 'User updated successfully', 'user' => $user]);
    }

    // Delete a user
    public function deleteUser($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }


    public function getMealClasses()
    {
        $mealClasses = MealClass::with('mealType')->get();
        return response()->json($mealClasses);
    }

    // Update a meal class
    public function updateMealClass(Request $request, $id)
    {
        $mealClass = MealClass::find($id);
        if (!$mealClass) {
            return response()->json(['message' => 'Meal class not found'], 404);
        }

        $mealClass->name = $request->name;
        $mealClass->price = $request->price;
        $mealClass->meal_num = $request->meal_num;
        $mealClass->description = $request->description;
        $mealClass->meal_type_id = $request->meal_type_id; // Assuming you're allowing changing meal type

        $mealClass->save();

        return response()->json(['message' => 'Meal class updated successfully', 'mealClass' => $mealClass]);
    }

    // Delete a meal class
    public function deleteMealClass($id)
    {
        $mealClass = MealClass::find($id);
        if (!$mealClass) {
            return response()->json(['message' => 'Meal class not found'], 404);
        }

        $mealClass->delete();

        return response()->json(['message' => 'Meal class deleted successfully']);
    }

    public function indexmealtype()
    {
        $mealTypes = MealType::withCount('meals', 'mealClasses')->get();

        return response()->json($mealTypes);
    }

    // Update a meal type
    public function updatemealtype(Request $request, $id)
    {
        $mealType = MealType::find($id);
        $mealType->name = $request->name;
        $mealType->save();

        return response()->json(['message' => 'Meal Type updated successfully', 'mealType' => $mealType]);
    }

    // Delete a meal type
    public function destroymealtype($id)
    {
        MealType::find($id)->delete();
        return response()->json(['message' => 'Meal Type deleted successfully']);
    }


    public function indexmeal()
    {
        $meals = Meal::with(['mealType', 'mealClass'])->get();
        return response()->json($meals);
    }

    // Update a meal
    public function updatemeal(Request $request, $id)
    {
        $meal = Meal::find($id);
        $meal->name = $request->name;
        $meal->meal_time = $request->meal_time;
        $meal->calories = $request->calories;
        $meal->meal_type_id = $request->meal_type_id;
        $meal->meal_class_id = $request->meal_class_id;
        $meal->image = $request->image;

        $meal->save();
        return response()->json(['message' => 'Meal updated successfully', 'meal' => $meal]);
    }

    // Delete a meal
    public function destroymeal($id)
    {
        Meal::find($id)->delete();
        return response()->json(['message' => 'Meal deleted successfully']);
    }



    public function getUserProfileAdmin($id)
    {
        $user = User::find(2);

        if ($user) {
            return response()->json($user);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }

    // Update user profile
    public function updateUserProfileAdmin(Request $request)
    {
        $user = User::find(2);

        if ($user) {
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->phone = $request->input('phone');


            // if ($request->hasFile('image')) {
            //     $image = $request->file('image');
            //     $imagePath = $image->store('user_image', 'public');
            //     $user->image = $imagePath;
            // }
            if ($request->hasFile('image')) {
                $image = $request->file('image');

                $imageName = time() . '.' . $image->getClientOriginalExtension();

                $image->storeAs('public/user_image', $imageName);

                $user->image = $imageName;
            }



            $user->save();
            return response()->json(['message' => 'Profile updated successfully']);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }
}
