<?php

namespace AG\LaravelReact\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Process\Process;
// use TCG\Voyager\Providers\VoyagerDummyServiceProvider;
// use TCG\Voyager\Traits\Seedable;
// use TCG\Voyager\VoyagerServiceProvider;

class ReactPageCommand extends BaseCommand
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'laravelreact:reactpage';

    protected $signature = 'laravelreact:reactpage {pagename}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Add new React page';

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

        $pageName = $this->argument('pagename');
        $lowcasePagename = strtolower($pageName);

        // clean before using temp directory
        $filesystem->deleteDirectory($this->tempPath);

        $this->vendorPublish(['reactpage-tmp']);

        $this->info("Renaming new page");
        $this->renameDummy($filesystem, $this->tempPath, $pageName);
        $filesystem->deleteDirectory($this->tempPath . '/DummyPage');

        $this->vendorPublish(['reactpage']);

        $this->info("Adding routes");

        $this->fileReplaceContent(
            $filesystem,
            base_path('resources/js/config/navbarLinks.js'),
            'topLeft: [',
            "topLeft: [\n    routes.{$lowcasePagename},",
            "routes.{$lowcasePagename}",
        );

        $this->fileReplaceContent(
            $filesystem,
            base_path('resources/js/config/routes.js'),
            "const routesConfig = {",
            "const routesConfig = {\n" .
                "  {$lowcasePagename}: {\n" .
                "    title: '{$pageName}',\n" .
                "    to: '/{$lowcasePagename}',\n" .
                "  },\n",
            "{$lowcasePagename}: {",
        );

        $this->fileReplaceContent(
            $filesystem,
            base_path('resources/js/config/routesWithComponents.js'),
            "import routes from './routes';",
            "import {$pageName}Page from '../pages/{$pageName}Page';\nimport routes from './routes';",
            "import {$pageName}Page from '../pages/{$pageName}Page'",
        );

        $this->fileReplaceContent(
            $filesystem,
            base_path('resources/js/config/routesWithComponents.js'),
            "const routesWithComponents = {",
            "const routesWithComponents = {\n" .
                "  {$lowcasePagename}: {\n" .
                "    ...routes.{$lowcasePagename},\n" .
                "    component: {$pageName}Page,\n" .
                "  },\n",
            "{$lowcasePagename}: {",
        );

        // remove all temp files
        $filesystem->deleteDirectory($this->tempPath);
    }

    private function renameDummy(Filesystem $filesystem, string $filePath, string $newName)
    {
        $file = basename($filePath);
        if ($file === '.' || $file === '..') {
            return;
        }
        if (is_dir($filePath)) {
            foreach (scandir($filePath) as $f) {
                $this->renameDummy($filesystem, $filePath . '/' . $f, $newName);
            }
        } else {
            $newPath = str_replace('Dummy', $newName, $filePath);
            if (!file_exists(dirname($newPath))) {
                mkdir(dirname($newPath), 0777, true);
            }
            copy($filePath, $newPath);
            $this->fileReplaceContent(
                $filesystem,
                $newPath,
                'Dummy',
                $newName
            );
        }
    }
}
