<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comments;
class CommentsController extends Controller
{
    public function getComments(){
        return response()->json(Comments::all(),200);
    }
    public function addComment(Request $request){
        $comment= Comments::create($request->all());
        return response($comment,201);
    }
    public function updateComment(Request $request,$id ){
        $comment=Comments::find($id);
        if(is_null($comment)){
            return response()->json(['message'=>'Employee Not Found'],404);
        }
        $comment->update($request->all());
        return response($comment,200);
    }
    public function deleteComment(Request $request,$id){
        $comment=Comments::find($id);
        if(is_null($comment)){
            return response()->json(['message'=>'Employee Not Found'],404);
        }
        $comment->delete($request->all());
        return response($comment,200);
    }
}


