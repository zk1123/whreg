<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Place;
use App\Models\City;

class TripPlannerController extends Controller
{
    public function planTrip(Request $request){
        
     $validated = $request->validate([
          'budget' => 'required|numeric|min:0',
          'cities' => 'required|array|',
     ]);

     $budget = $validated['budget'];
     $cities = $validated['cities'];

     $places = Place::whereIn('city_id', $cities)->get();

     $places = $places->shuffle();

    
     $places = $places->map(function($place){
   
        $randomFactor = mt_rand(70, 130) / 100;

        $place->random_weight = $place->price * $randomFactor;
        return $place;
    })
    ->sortBy('random_weight')->values();

     $selected = [];
     $total = 0;

     foreach($places as $place){
        if($total + $place->price <= $budget){
            $selected[] = $place;
            $total += $place->price;
        }else{
            break;
        }
     }

     return response()->json([
            'total_spent' => $total,
            'total_places' => count($selected),
            'places' => $selected,
            'remaining' => $budget - $total,

     ]);

    }

    public function Destinations()
{
    // Fetch places with price >= 150
    $places = Place::where('price', '>=', 100)->orderBy('price', 'desc') ->get();

    return response()->json($places);
}


 public function placesByCity(Request $request)
{
    $cities = City::all();
    $result = [];

    foreach ($cities as $city) {
        $place = Place::where('city_id', $city->id)
            ->orderBy('price', 'desc')   // choose any logic you want
            ->first();

        if ($place) {
            $result[] = [
                'city_id' => $city->id,
                'city_name' => $city->name,
                'place' => $place
            ];
        }
    }

    return response()->json($result);
}




  }
