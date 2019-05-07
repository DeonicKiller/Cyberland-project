<?php

namespace App\Http\Controllers;

use App\Product;

use Illuminate\Http\Request;

use Illuminate\Http\Response;

class ProductController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

     /**
      * Return the list of Products
      * @return Illuminate\Http\Response
      */
    public function showProducts()
    {
       $products = Product::all();
       
       return response()->json($products);
    }
    /**
     * Show one Product
     * @return Illuminate\Http\Response
     */
    public function showProduct($productId)
{
        $product = Product::findOrFail($productId);
        return response()->json($product);
    }
  /**
     * Create a new product
     * @return Illuminate\Http\Response
     */
    public function createProduct(Request $request)
    {
        $rules = [
            'Platform' => 'required|max:255|in:PS4,Xbox,Pc,Nintendo switch',
            'Name' => 'required|max:255',
            'Budget' => 'required|max:255',
            'Image' => 'required',
            'Description' => 'required',
            'Multi/on' => 'required',
            'Genre' => 'required',

        ];

        $this->validate($request, $rules);

        $product = Product::create($request->all());

        return response()->json($product, 201);
    }
    /**
     * Update an existing product
     * @return Illuminate\Http\Response
     */
    public function updateProduct(Request $request, $productId)
    {
        $rules = [
            'Platform' => 'required|max:255|in:PS4,Xbox,Pc,Nintendo switch',
            'Name' => 'required|max:255',
            'Budget' => 'required|max:255',
            'Image' => 'required',
            'Description' => 'required',
            'Multi/on' => 'required',
            'Genre' => 'required',

        ];
        $this->validate($request, $rules);

        $product = Product::findOrFail($productId);

        $product->update($request->all());

        return response()->json($product, 200);

    }
    /**
     * Deleting an product
     * @return Illuminate\Http\Response
     */

    public function deleteProduct($productId)
    {
        $product = Product::findOrFail($productId);

        $product->delete();

        return response()->json($product, 200);
    }

    public function RecomendedProducts(Request $request) {

        $budget = explode (",", $request->budget); 
        $genre = '%';
        $genre .= $request->genre;
        $genre .= '%';
        
        $data = Product::where('platform', '=', $request->platform)
        ->where('multi/on','=', $request->multiplayer)
        ->where('genre', 'LIKE', $request->genre)
        ->whereBetween('Budget', $budget)->get();
        
        return response()->json($data, 200);
    }
}


