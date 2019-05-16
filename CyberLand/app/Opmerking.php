<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Opmerking extends Model
{
 /**
 *  The attributes that are mass assignable.
 *
 * @var array
 */
 protected $fillable = [
    'Opmerkingen',
    'product_id',
 ];
 
}
