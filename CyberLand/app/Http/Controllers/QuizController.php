<?php

namespace App\Http\Controllers;

use App\Quiz;

use Illuminate\Http\Request;

use Illuminate\Http\Response;

class QuizController extends Controller
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
      * Return the list of Quizs
      * @return Illuminate\Http\Response
      */
    public function showQuizs()
    {
       $quizs = Quiz::all();
       
       return response()->json($quizs);
    }
    /**
     * Show one Quiz
     * @return Illuminate\Http\Response
     */
    public function showQuiz($quizId)
{
        $quiz = Quiz::findOrFail($quizId);
        return response()->json($quiz);
    }
  /**
     * Create a new quiz
     * @return Illuminate\Http\Response
     */
    public function createQuiz(Request $request)
    {
        $rules = [
            

        ];

        $this->validate($request, $rules);

        $quiz = Quiz::create($request->all());

        return response()->json($quiz, 201);
    }
    /**
     * Update an existing quiz
     * @return Illuminate\Http\Response
     */
    public function updateQuiz(Request $request, $quizId)
    {
        $rules = [

        ];
        
        $this->validate($request, $rules);

        $quiz = Quiz::findOrFail($quizId);

        $quiz->update($request->all());

        return response()->json($quiz, 200);

    }
    /**
     * Deleting an quiz
     * @return Illuminate\Http\Response
     */

    public function deleteQuiz($quizId)
    {
        $quiz = Quiz::findOrFail($quizId);

        $quiz->delete();

        return response()->json($quiz, 200);
    }

}


