<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Vite Asset Build Path
    |--------------------------------------------------------------------------
    |
    | This value determines the directory where the Vite build files including
    | the manifest file will be located. By default, Laravel assumes the
    | build directory is located at "public/build", but you can change it.
    |
    */

    'hot_file' => public_path('hot'),
    'build_directory' => 'build', // sesuaikan jika di folder lain
    'manifest_path' => public_path('build/manifest.json'),

    'dev_server' => [
        'url' => env('VITE_DEV_SERVER_URL', 'http://localhost:5173'),
        'enabled' => env('APP_ENV') === 'local',
    ],
];
