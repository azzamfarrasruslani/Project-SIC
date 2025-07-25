<?php

return [
    'manifest_path' => base_path('public_html/build/manifest.json'),

    'hot_file' => base_path('public_html/hot'),

    'build_directory' => 'build',

    'asset_url' => env('ASSET_URL', null),

    'ssr' => [
        'enabled' => false,
        'entry' => 'resources/js/ssr.js',
    ],
];
