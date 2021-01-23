<?php

namespace AG\LaravelReact\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Process\Process;
// use TCG\Voyager\Providers\VoyagerDummyServiceProvider;
// use TCG\Voyager\Traits\Seedable;
// use TCG\Voyager\VoyagerServiceProvider;

class InstallCommand extends Command
{
    // use Seedable;

    // protected $seedersPath = __DIR__.'/../../publishable/database/seeds/';

    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'laravelreact:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install the Laravel React package';

    // protected function getOptions()
    // {
    //     return [
    //         ['force', null, InputOption::VALUE_NONE, 'Force the operation to run when in production', null],
    //         ['with-dummy', null, InputOption::VALUE_NONE, 'Install with dummy data', null],
    //     ];
    // }

    /**
     * Get the composer command for the environment.
     *
     * @return string
     */
    // protected function findComposer()
    // {
    //     if (file_exists(getcwd().'/composer.phar')) {
    //         return '"'.PHP_BINARY.'" '.getcwd().'/composer.phar';
    //     }
    //
    //     return 'composer';
    // }

    // public function fire(Filesystem $filesystem)
    // {
    //     return $this->handle($filesystem);
    // }

    /**
     * Execute the console command.
     *
     * @param \Illuminate\Filesystem\Filesystem $filesystem
     *
     * @return void
     */
    public function handle(Filesystem $filesystem)
    {
        $this->handleSanctum($filesystem);
        $this->handleVoyager($filesystem);
        $this->handleLaravelReact($filesystem);
    }

    public function handleSanctum(Filesystem $filesystem)
    {
        $this->info('Publishing the Laravel/Sanctum assets, database, and config files');
        $this->call('vendor:publish', ['--provider' => "Laravel\Sanctum\SanctumServiceProvider"]);

        $this->info('Migrating the database tables into your application');
        $this->call('migrate');
    }

    public function handleVoyager(Filesystem $filesystem)
    {
        $this->call('voyager:install');

        $this->info('Adding Voyager usings');
        $routes_contents = $filesystem->get(base_path('routes/web.php'));
        if (false === strpos($routes_contents, 'use TCG\Voyager\Facades\Voyager;')) {
            $routes_contents = str_replace(
                'use Illuminate\Support\Facades\Route;',
                "use Illuminate\Support\Facades\Route;\nuse TCG\Voyager\Facades\Voyager;",
                $routes_contents
            );
            $filesystem->put(base_path('routes/web.php'), $routes_contents);
        }
    }

    public function handleLaravelReact(Filesystem $filesystem)
    {
        $this->info('Publishing the Laravel React assets, database, and config files');

        $filesystem->deleteDirectory(base_path('resources/js'), true);

        $this->vendorPublish(['controllers', 'resources']);
        $this->vendorPublishForce(['mix']);

        $this->info('Adding LaravelReact routes to routes/web.php');
        $this->fileReplaceContent(
            $filesystem,
            base_path('routes/web.php'),
            'Route::get(\'/\'',
            'Route::get(\'/dummy\''
        );
        $this->fileReplaceContent(
            $filesystem,
            base_path('routes/web.php'),
            'use Illuminate\Support\Facades\Route;',
            "use Illuminate\Support\Facades\Route;\nuse App\Http\Controllers\HomeController;",
            'use App\Http\Controllers\HomeController;'
        );
        $this->fileReplaceContent(
            $filesystem,
            base_path('routes/web.php'),
            'use Illuminate\Support\Facades\Route;',
            "use Illuminate\Support\Facades\Route;\nuse App\Http\Controllers\UserController;",
            'use App\Http\Controllers\UserController;'
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('routes/web.php'),
            "Route::get('/user', [UserController::class, 'user']);",
            "Route::get('/user'"
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('routes/web.php'),
            "Route::post('/login', [UserController::class, 'postLogin']);",
            "Route::post('/login'"
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('routes/web.php'),
            "Route::post('/logout', [UserController::class, 'logout']);",
            "Route::psot('/logout'"
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('routes/web.php'),
            "\nRoute::get('/{any}', [HomeController::class, 'index'])->where('any', '.*')->name('home');\n",
            'Route::get(\'/{any}\''
        );

        $this->info('Adding .env variables');
        $this->fileAppendContent(
            $filesystem,
            base_path('.env'),
            "\n# must always begin and end with slash\nAPP_BASENAME=/\nMIX_APP_BASENAME=\"\${APP_BASENAME}\"\n",
            'APP_BASENAME'
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('.env'),
            "\nMIX_APP_NAME=\"\${APP_NAME}\"\n",
            'MIX_APP_NAME'
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('.env'),
            "\nMIX_APP_URL=\"\${APP_URL}\"\n",
            'MIX_APP_URL'
        );

        $this->info('Adding package.json dependencies');
        $this->addNpmDependencies($filesystem, [
            '@alangiacomin/js-utils' => '1.1.0',
            '@fortawesome/fontawesome-svg-core' => '^1.2.32',
            '@fortawesome/free-brands-svg-icons' => '^5.15.1',
            '@fortawesome/free-solid-svg-icons' => '^5.15.1',
            '@fortawesome/react-fontawesome' => '^0.1.14',
            '@reduxjs/toolkit' => '^1.5.0',
            'axios' => '^0.21',
            'bootstrap' => '^4.5.3',
            'connected-react-router' => '^6.8.0',
            'core-js' => '^3.8.1',
            'formik' => '^2.2.6',
            'history' => '^4.10',
            'i18next' => '^19.8.4',
            'i18next-browser-languagedetector' => '^6.0.1',
            'i18next-http-backend' => '^1.0.21',
            'prop-types' => '15.7.2',
            'react' => '^16.0',
            'react-bootstrap' => '^1.4.0',
            'react-dom' => '^16.0',
            'react-i18next' => '^11.8.5',
            'react-redux' => '^7.2.2',
            'react-router-bootstrap' => '^0.25.0',
            'react-router-dom' => '^5.2.0',
            'redux-logger' => '^3.0.6',
            'regenerator' => '^0.14.7',
            'regenerator-runtime' => '^0.13.7',
            'simple-line-icons' => '^2.5.5',
            'yup' => '^0.31.1'
        ]);

        $this->info('Successfully installed LaravelReact! Enjoy');
    }

    private function vendorPublishForce($tags)
    {
        return $this->vendorPublish($tags, true);
    }

    private function vendorPublish($tags, $force = false)
    {
        $this->call('vendor:publish', ['--tag' => $tags, '--force' => $force]);
    }

    private function fileReplaceContent(Filesystem $filesystem, $filepath, $find, $replace, $condition = null)
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

    private function fileAppendContent(Filesystem $filesystem, $filepath, $append, $condition = null)
    {
        $file_content = $filesystem->get($filepath);
        if ($condition === null || false === strpos($file_content, $condition)) {
            $filesystem->append($filepath, $append);
        }
    }

    private function addNpmDependencies(Filesystem $filesystem, $packages)
    {
        krsort($packages);
        foreach ($packages as $package => $version) {
            $this->addNpmDependency($filesystem, $package, $version);
        }
    }

    private function addNpmDependency(Filesystem $filesystem, $package, $version)
    {
        $packageJsonPath = base_path('package.json');
        $newDependencies = $this->fileReplaceContent(
            $filesystem,
            $packageJsonPath,
            "\"devDependencies\": {",
            "\"dependencies\": {\n    },\n    \"devDependencies\": {",
            "\"dependencies\": {"
        );
        $this->fileReplaceContent(
            $filesystem,
            $packageJsonPath,
            "\"dependencies\": {",
            "\"dependencies\": {\n        \"$package\": \"$version\"" . (!$newDependencies ? ',' : ''),
            "\"$package\":"
        );
    }
}
