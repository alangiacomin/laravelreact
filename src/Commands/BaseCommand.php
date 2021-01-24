<?php

namespace AG\LaravelReact\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Process\Process;
// use TCG\Voyager\Providers\VoyagerDummyServiceProvider;
// use TCG\Voyager\Traits\Seedable;
// use TCG\Voyager\VoyagerServiceProvider;

class BaseCommand extends Command
{
    function __construct()
    {
        parent::__construct();
        $this->tempPath = base_path('temp');
    }

    protected function vendorPublishForce($tags)
    {
        return $this->vendorPublish($tags, true);
    }

    protected function vendorPublish($tags, $force = false)
    {
        $this->call('vendor:publish', ['--tag' => $tags, '--force' => $force]);
    }

    protected function fileReplaceContent(Filesystem $filesystem, $filepath, $find, $replace, $condition = null)
    {
        $file_content = $filesystem->get($filepath);
        if ($condition !== null && false !== strpos($file_content, $condition)) {
            return false;
        }
        if (false === strpos($file_content, $find)) {
            return false;
        }
        $file_content = str_replace($find, $replace, $file_content);
        $filesystem->put($filepath, $file_content);
        return true;
    }

    protected function fileAppendContent(Filesystem $filesystem, $filepath, $append, $condition = null)
    {
        $file_content = $filesystem->get($filepath);
        if ($condition === null || false === strpos($file_content, $condition)) {
            $filesystem->append($filepath, $append);
        }
    }
}
