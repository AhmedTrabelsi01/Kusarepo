<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
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
        // dd($product->images);
        if ($request->hasFile('images')){
            $images=$request->file('images');
            $name=$images->hashName();
            $path=$images->store('public/Products',$name);
            $url=Storage::url($name);
            $product->images=$url;
        }
        return response([$url,$product],201);
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
    public function uploadimage(Request $request)
    {
        $post=new Projects ;
        if ($request->hasFile('image')){
            $completeFileName=$request->file('image')->getClientOriginalName();
            $fileNameOnly=pathinfo($completeFileName,PATHINFO_FILENAME);
            $extension=$request->file('image')->getClientOriginalExtension();
            $compPic=str_replace(' ','_',$fileNameOnly).'-'.rand().'_'.time().'.'.$extension;
            $path=$request->file('image')->storeAs('public/Products',$compPic);
            $post->images=$compPic;
        }
        if($post->save()){
            return ['status'=>true,'message'=>'sucess'];
        }else{
            return ['status'=>false,'message'=>'error'];
        }

    }
}