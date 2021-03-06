<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Product controller

$router->get('/products', 'ProductController@showProducts');
$router->get('/products/{productID}', 'ProductController@showProduct');
$router->post('/products', 'ProductController@createProduct');
$router->put('/products/{productID}', 'ProductController@updateProduct');
$router->delete('/products/{productID}', 'ProductController@deleteProduct');

$router->get('/quizs', 'QuizController@showQuizs');

$router->post('/recomended','ProductController@RecomendedProducts');
$router->get('/opmerking/{opmerkingID}', 'ProductController@showProductComments');

//Opmerking controller

$router->post('/opmerkingen', 'OpmerkingenController@createOpmerking');
$router->get('/opmerkingen', 'OpmerkingenController@showAllOpmerkingen');
