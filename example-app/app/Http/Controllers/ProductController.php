<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Projects;
class ProductController extends Controller
{
    public function getProducts(){
        return response()->json(Projects::all(),200);
    }
    public function getProduct($id){
        $product= Projects::find($id);
        if (is_null($product)){
            return response()->json(['message'=>'Employee Not Found'],404);
        }
        return response()->json($product::find($id),200);
    }
    public function addProduct(Request $request){
        $product= Projects::create($request->all());
        return response($product,201);
    }
    public function updateProduct(Request $request,$id ){
        $product=Projects::find($id);
        if(is_null($product)){
            return response()->json(['message'=>'Employee Not Found'],404);
        }
        $product->update($request->all());
        return response($product,200);
    }
    public function deleteProduct(Request $request,$id){
        $product=Projects::find($id);
        if(is_null($product)){
            return response()->json(['message'=>'Employee Not Found'],404);
        }
        $product->delete($request->all());
        return response($product,200);
    }
}
