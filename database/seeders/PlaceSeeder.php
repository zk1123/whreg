<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('places')->insert([
            [
            'name' => 'Pyramids of Giza',
            'description' => 'Ancient wonders of Egypt',
            'image_url' => '/images/pyramids.jpg',
            'price' => 200.00,
            'city_id' => 2,
        ],
            [
            'name' => 'Cairo Opera House',
            'description' => 'The magical artisan Opera House in Cairo',
            'image_url' => '/images/opera.jpg',
            'price' => 400.00,
            'city_id' => 1,
        ],
            [
            'name' => 'Library Of Alexandria',
            'description' => 'The cultural wonder of the Midetterenian, Library of Alexandria',
            'image_url' => '/images/alexlib.jpg',
            'price' => 50.00,
            'city_id' => 3,
        ],
        ]);
    }
}
