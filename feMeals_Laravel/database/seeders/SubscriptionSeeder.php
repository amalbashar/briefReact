<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Subscription;

class SubscriptionSeeder extends Seeder
{
    public function run()
    {
        Subscription::create([
            'user_id' => 1, // Ahmad Saleh
            'meal_class_id' => 1, // Basic
            'start_date' => '2021-04-15',
            'end_date' => '2022-10-05',
            'status' => 'Finished',
            'delivery_info' => 'University Street, Amman',
            'created_at' => now(),
        ]);

        Subscription::create([
            'user_id' => 5, // Hanan Ibrahim
            'meal_class_id' => 6, // VIP
            'start_date' => '2022-01-09',
            'end_date' => '2023-11-09',
            'status' => 'Active',
            'delivery_info' => 'Medina Street, Amman',
            'created_at' => now(),
        ]);

        Subscription::create([
            'user_id' => 1, // Ahmad Saleh
            'meal_class_id' => 9, // VIP
            'start_date' => '2023-11-28',
            'end_date' => '2024-04-16',
            'status' => 'Pending',
            'delivery_info' => 'Mecca Street, Amman',
            'created_at' => now(),
        ]);

        Subscription::create([
            'user_id' => 5, // Hanan Ibrahim
            'meal_class_id' => 3, // Basic
            'start_date' => '2022-04-23',
            'end_date' => '2023-10-02',
            'status' => 'Active',
            'delivery_info' => 'Abdallah Ghosheh Street, Amman',
            'created_at' => now(),
        ]);

        Subscription::create([
            'user_id' => 9, // Fadi Ibrahim
            'meal_class_id' => 9, // VIP
            'start_date' => '2021-08-12',
            'end_date' => '2022-08-17',
            'status' => 'Active',
            'delivery_info' => 'Zahran Street, Amman',
            'created_at' => now(),
        ]);

        Subscription::create([
            'user_id' => 9, // Fadi Ibrahim
            'meal_class_id' => 9, // VIP
            'start_date' => '2020-01-11',
            'end_date' => '2021-01-09',
            'status' => 'Approved',
            'delivery_info' => 'Wasef Al-Tal Street, Amman',
            'created_at' => now(),
        ]);

        Subscription::create([
            'user_id' => 9, // Fadi Ibrahim
            'meal_class_id' => 9, // VIP
            'start_date' => '2022-03-27',
            'end_date' => '2023-02-02',
            'status' => 'Pending',
            'delivery_info' => 'Abu Nseir Area, Amman',
            'created_at' => now(),
        ]);

        Subscription::create([
            'user_id' => 1, // Ahmad Saleh
            'meal_class_id' => 1, // Basic
            'start_date' => '2019-08-08',
            'end_date' => '2020-12-15',
            'status' => 'Approved',
            'delivery_info' => 'Jabal Amman, Amman',
            'created_at' => now(),
        ]);

        Subscription::create([
            'user_id' => 5, // Hanan Ibrahim
            'meal_class_id' => 5, // Premium
            'start_date' => '1994-03-08',
            'end_date' => '1995-07-31',
            'status' => 'Approved',
            'delivery_info' => 'Swefieh Area, Amman',
            'created_at' => now(),
        ]);
    }
}
