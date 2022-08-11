<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contacts;
class ContactsController extends Controller
{
    public function addContact(Request $request){
        $contact= Contacts::create($request->all());
        return response($contact,201);
    }
    public function getContacts(){
        return response()->json(Contacts::all(),200);
    }
}
