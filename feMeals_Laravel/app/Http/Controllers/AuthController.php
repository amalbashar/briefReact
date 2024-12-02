<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // Register a new user
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['message' => 'User registered successfully'], 201);
    }

    // Login an existing user
    public function login(Request $request)
{
    // Validate login credentials
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $credentials = $request->only('email', 'password');

    // Attempt to authenticate user
    if (Auth::attempt($credentials)) {
        $user = Auth::user(); // Get the authenticated user

        // Return success response with user data and redirect URL
        return response()->json([
            'message' => 'Login successful',
            'user' => $user, // بيانات المستخدم المصادق عليه
            'redirect_url' => 'http://localhost:5173/' // صفحة الهوم على React
        ], 200);
    }

    // If authentication fails, return error response
    return response()->json(['message' => 'Invalid credentials'], 401);
}
}
