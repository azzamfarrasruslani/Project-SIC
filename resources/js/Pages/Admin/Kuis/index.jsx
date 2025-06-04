import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import KuisCard from "@/Components/Admin/Kuis/KuisCard";
const Index = ({ kuis }) => {
    return (
        <AuthenticatedLayout>
            <Head title="Kuis" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <KuisCard kuis={kuis} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
