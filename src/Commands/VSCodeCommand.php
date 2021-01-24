<?php

namespace AG\LaravelReact\Commands;

use Illuminate\Filesystem\Filesystem;

class VSCodeCommand extends BaseCommand
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

        $this->vendorPublishForce(['vscode']);
    }
}
