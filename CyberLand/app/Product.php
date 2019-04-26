<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
 /**
 *  The attributes that are mass assignable.
 *
 * @var array
 */
 protected $fillable = [
    'Name',
    'Budget',
    'Platform',
    'Image',
    'Description',
    'Multi/on',
    'Genre',
 ];
}
