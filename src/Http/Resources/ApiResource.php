<?php

namespace AG\LaravelReact\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

abstract class ApiResource extends JsonResource
{
  protected $vars = [];
  protected $errors = [];

  abstract protected function isSuccess();
  abstract protected function defineOutput();

  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request)
  {
    $this->defineOutput();
    return [
      'success' => $this->isSuccess(),
      'errors' => $this->errors,
      'result' => array_combine(
        $this->vars,
        array_map(function ($v) {
          return $this[$v];
        }, $this->vars)
      )
    ];
  }
}
