<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class regcontroller extends Controller
{
    


public function login(Request $request){
     
  $request->validate([
    'email'=> 'required|email',
    'password'=> 'required',
  ]);

  $user = User::where('email',$request->email)->first();

  if($user &&  Hash::check($request->password, $user->password)){
            Auth::login($user);

            if ($user->email === 'ziad@123.com') {
        return response()->json(['redirect' => '/adminpage'],200);
            } else{

        return response()->json(['redirect' => '/homepage'], 200);
    }
  }

        return response()->json(['message' => 'Incorrect Email or Password'],401);

}


public function RegisterUser(Request $request){

$validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:6|confirmed',
]);

$user = User::create([
  'name' => $validated['name'],
  'email' => $validated['email'],
  'password' => Hash::make($validated['password']),
]);

return response()->json(['message' => 'User Registered successfully']);

}

public function updatePassword(Request $request)
{
    
    $request->validate([
        'email' => 'required|email|exists:myusers,email', 
        'password' => 'required|string|min:8|confirmed', 
    ]);

    
    $user = User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json([
            'message' => 'User not found.'
        ], 404);
    }
    
    $user->password = Hash::make($request->password);
    $user->save();

    
    return response()->json([
        'message' => 'Password changed successfully.',
        'redirect' => '/login'
    ], 200);
}




public function returnloginview(){
    return view ('/loginpage');
}
public function returnadminview(){
    return view ('/adminpage');
}

public function returnregisterview(){
  return view('/registerpage');
}


    
}
