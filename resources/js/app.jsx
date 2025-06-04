import '../css/app.css';
import './bootstrap';

import React, { Suspense } from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx') // <- ini sudah lazy load
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <App {...props} />
            </Suspense>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
