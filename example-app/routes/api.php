<?php
use App\Http\Controllers\CommentsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ContactsController;

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


//get all employees
Route::get('products',[ProductController::class,'getProducts']);

//get specific employee
Route::get('product/{id}',[ProductController::class,'getProduct']);

//Add Product
Route::post('addProduct',[ProductController::class,'addProduct']);

//update Product
Route::put('updateProduct/{id}',[ProductController::class,'updateProduct']);

//delete Product
Route::delete('deleteProduct/{id}',[ProductController::class,'deleteProduct']);

//get comments
Route::get('comments',[CommentsController::class,'getComments']);

//add comment
Route::post('addComment',[CommentsController::class,'addComment']);

//edit comment
Route::put('updateComment/{id}',[CommentsController::class,'updateComment']);

//delete comment
Route::delete('deleteComment/{id}',[CommentsController::class,'deleteComment']);
//add contact
Route::post("addContact",[ContactsController::class,'addContact']);
//file
Route::post('products',[ProductController::class,'file']);