<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Place;
use App\Models\City;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{

    public function returnadminview(){
        return view('/adminpage');
    }
public function login(Request $request){
     
  $request->validate([
    'mail'=> 'required|email',
    'password'=> 'required',
  ]);

  $user = User::where('mail',$request->mail)->first();



  if($user &&  Hash::check($request->password, $user->password)){
            Auth::login($user);
            return redirect(route('homepage'))->with('success','logged in Successfully');
  }

          return redirect()->back()->with('error', 'Invalid credentials.');

}


//****************************ADD A CITY ****************************************/


public function addCity(Request $request){

$validated = $request->validate([

            'name' => 'required|string|max:255',

       ]);

    $city = City::create([
        'name' => $validated['name'],

       ]);

       return response()->json(['message' => 'city added successfully','place' => $city], 201);   

}


//****************************ADD A PLACE ****************************************/
public function addPlace(Request $request){
       
       $validated = $request->validate([

            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image_url' => 'required|string',
            'price' => 'required|numeric|min:0',
            'city_id' => 'required|exists:cities,id',
            'google_maps_link' => 'required|url', 

       ]);

        $place = Place::create([
        'name' => $validated['name'],
        'description' => $validated['description'],
        'image_url' => $validated['image_url'],
        'price' => $validated['price'],
        'city_id' => $validated['city_id'],
        'google_maps_link' => $validated['google_maps_link'],

       ]);

       return response()->json(['message' => 'place added successfully','place' => $place], 201);

}

//****************************UPDATE INFO ****************************************/
public function update(Request $request, $id)
{
   
    $place = Place::findOrFail($id);

    
    $validated = $request->validate([
        'name' => 'sometimes|string|max:255',
        'description' => 'sometimes|string',
        'image_url' => 'sometimes|string',
        'price' => 'sometimes|numeric|min:0',
        'city_id' => 'sometimes|exists:cities,id', 
        'google_maps_link' => 'sometimes|url',
    ]);

    
    $place->update($request->only([
    'name',
    'description',
    'image_url',
    'price',
    'city_id',
    'google_maps_link',
]));


    
    return response()->json([
        'message' => 'Place updated successfully!',
        'place' => $place
    ], 200);
}

//**************************** REMOVE A PLACE ****************************************/
public function removePlace($id)
{
    
    $place = Place::findOrFail($id);

    
    $place->delete();

    
    return response()->json([
        'message' => 'Place deleted successfully!',
        'deleted_place_id' => $id
    ], 200);
}


}
