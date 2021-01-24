<?php

namespace AG\LaravelReact\Http\Resources;

abstract class SuccessResource extends ApiResource
{
  protected function isSuccess()
  {
    return true;
  }
}
