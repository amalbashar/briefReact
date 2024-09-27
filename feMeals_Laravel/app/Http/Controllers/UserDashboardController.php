<?php

// app/Http/Controllers/UserDashboardController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Subscription;

class UserDashboardController extends Controller
{
    public function getUserData(Request $request)
    {
        // استدعاء المستخدم الحالي من خلال الـ Sanctum
        $user =User::find(1);

        // جلب الاشتراكات الخاصة بالمستخدم من جدول الاشتراكات
        $subscriptions = Subscription::where('user_id', $user->id)->get();

        // إرسال البيانات كرد JSON
        return response()->json([
            'user' => $user,
            'subscriptions' => $subscriptions
        ]);
    }
}
/* الدائرة التي تعرض حالة الاشتراك */



