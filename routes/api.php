<?php

use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TripPlannerController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/find-trip', [TripPlannerController::class, 'planTrip']);
Route::post('/destinations', [TripPlannerController::class, 'Destinations']);
Route::post('/placesbycity', [TripPlannerController::class, 'placesByCity']);

Route::post('/addcity', [AdminController::class, 'addCity']); 
Route::post('/placeedit', [AdminController::class, 'addPlace']); 
Route::put('/placeedit/{id}', [AdminController::class, 'update']); 
Route::delete('/placeedit/{id}', [AdminController::class, 'removePlace']); 
