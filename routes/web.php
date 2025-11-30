<?php

use App\Http\Controllers\regcontroller;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('index');
});

Route::get('/homepage', function () {
    return view('index');
});


Route::get('/loginpage', [regcontroller::class, 'returnloginview'])->name('loginpage');
Route::get('/adminpage', [regcontroller::class, 'returnadminview'])->name('adminpage');
Route::get('/registerpage', [regcontroller::class, 'returnregisterview'])->name('registerpage');

Route::post('/RegisterUser',[regcontroller::class,'RegisterUser'])->name('RegisterUser');
Route::post('/Login',[regcontroller::class,'login'])->name('Login');
Route::post('/updatepassword',[regcontroller::class,'updatePassword'])->name('updatepasword');

