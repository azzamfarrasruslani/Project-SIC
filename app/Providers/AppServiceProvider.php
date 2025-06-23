<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        // Set public path ke base_path agar Laravel tahu lokasi file vite berada di root/public_html
        $this->app->bind('path.public', function() {
            return base_path('public_html');
        });

        // Optional: konfigurasi tambahan Vite
        Vite::prefetch(concurrency: 3);
    }
}
