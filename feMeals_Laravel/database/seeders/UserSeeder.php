<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Ahmad Saleh',
            'email' => 'ahmad.saleh@example.com',
            'password' => bcrypt('password'), // Replace with an appropriate password
            'role_id' => 1, // Normal User
            'image' => 'default.jpg',
            'phone' => '0791234567',
            'created_at' => now(),
        ]);

        User::create([
            'name' => 'Mohammad Ali',
            'email' => 'mohammad.ali@example.com',
            'password' => bcrypt('password'),
            'role_id' => 2, // Admin User
            'image' => 'default.jpg',
            'phone' => '0799876543',
            'created_at' => now(),
        ]);

        User::create([
            'name' => 'Omar Nasser',
            'email' => 'omar.nasser@example.com',
            'password' => bcrypt('password'),
            'role_id' => 1,
            'image' => 'default.jpg',
            'phone' => '0786543210',
            'created_at' => now(),
        ]);

        User::create([
            'name' => 'Sara Khaled',
            'email' => 'sara.khaled@example.org',
            'password' => bcrypt('password'),
            'role_id' => 1,
            'image' => 'default.jpg',
            'phone' => '0771122334',
            'created_at' => now(),
        ]);

        User::create([
            'name' => 'Hanan Ibrahim',
            'email' => 'hanan.ibrahim@example.org',
            'password' => bcrypt('password'),
            'role_id' => 1,
            'image' => 'default.jpg',
            'phone' => '0772233445',
            'created_at' => now(),
        ]);

        User::create([
            'name' => 'Ziad Mansour',
            'email' => 'ziad.mansour@example.net',
            'password' => bcrypt('password'),
            'role_id' => 1,
            'image' => 'default.jpg',
            'phone' => '0795566778',
            'created_at' => now(),
        ]);

        User::create([
            'name' => 'Tevin Borer',
            'email' => 'tevin.borer@example.com',
            'password' => bcrypt('password'),
            'role_id' => 1,
            'image' => 'default.jpg',
            'phone' => '0789988776',
            'created_at' => now(),
        ]);

        User::create([
            'name' => 'Yara Qasim',
            'email' => 'yara.qasim@example.com',
            'password' => bcrypt('password'),
            'role_id' => 1,
            'image' => 'default.jpg',
            'phone' => '0799988771',
            'created_at' => now(),
        ]);

        User::create([
            'name' => 'Fadi Ibrahim',
            'email' => 'fadi.ibrahim@example.com',
            'password' => bcrypt('password'),
            'role_id' => 1,
            'image' => 'default.jpg',
            'phone' => '0797766554',
            'created_at' => now(),
        ]);
    }
}
