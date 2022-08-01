<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable=['name','category','images','feedback','rating','type','price'];
}
