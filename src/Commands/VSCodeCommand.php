<?php

namespace AG\LaravelReact\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;

class VSCodeCommand extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'laravelreact:vscode';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Setup VS Code environment';

    /**
     * Execute the console command.
     *
     * @param \Illuminate\Filesystem\Filesystem $filesystem
     *
     * @return void
     */
    public function handle(Filesystem $filesystem)
    {
        $this->info($this->description);

        // Publish only relevant resources on install (only new files)
        // $tags = ['vscode'];
        // $this->call('vendor:publish', ['--tag' => $tags]);

        // Publish only relevant resources on install (force overwrite)
        $tags = ['vscode'];
        $this->call('vendor:publish', ['--tag' => $tags, '--force' => true]);
    }
}
