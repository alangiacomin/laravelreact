<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerAuthController;

class UserController extends VoyagerAuthController
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('auth:sanctum')->except(['postLogin']);
  }

  /**
   * Show the application dashboard.
   *
   * @return \Illuminate\Contracts\Support\Renderable
   */
  public function user(Request $request)
  {
    return $request->user()->fullData();
  }

  public function postLogin(Request $request)
  {
    $response = parent::postLogin($request);
    if ($response->getStatusCode() == 204) {
      return $this->user($request);
    }
    return $response;
  }
}
