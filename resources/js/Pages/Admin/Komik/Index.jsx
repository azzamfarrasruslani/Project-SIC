import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function Index() {
    return (
        <AuthenticatedLayout
        >
            <Head title="Komik" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                          Ini Halaman Admin Komik
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


