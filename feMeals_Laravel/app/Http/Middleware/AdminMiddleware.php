<?php
// app/Http/Middleware/AdminMiddleware.php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Check if the user is authenticated and has role_id = 2
        if (Auth::check() && Auth::user()->role_id == 2) {
            return $next($request); // Allow the request to proceed
        }

        // If not authenticated as admin, return unauthorized response
        return redirect('/admin/login')->with('error', 'Unauthorized access');
    }
}
