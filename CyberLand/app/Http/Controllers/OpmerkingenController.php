<?php

namespace App\Http\Controllers;

use App\Opmerking;

use Illuminate\Http\Request;

use Illuminate\Http\Response;

class OpmerkingenController extends Controller
{

    /**
      * Return the list of Messages
      * @return Illuminate\Http\Response
      */
      public function showAllOpmerkingen()
      {
              $opmerkingen = Opmerking::all();
              
              return response()->json($opmerkingen);
          }

     /**
     * Create a message
     * @return Illuminate\Http\Response
     */   
    public function createOpmerking(Request $request)
    {
        
        $rules = [
            'Opmerkingen' => 'required',
            
        ];

        $this->validate($request, $rules);

        $opmerking = Opmerking::create($request->all());

        return response()->json($opmerking, 201);
    }

}
   