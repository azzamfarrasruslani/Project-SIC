import KuisCard from "@/Components/Admin/Kuis/KuisCard";
import React from "react";
// import GuestLayout from "@/Layouts/GuestLayout";
// import AdminLayout from "@/Layouts/AdminLayout";

const Index = ({ kuis }) => {
    return (


            <div className="">
                <KuisCard kuis={kuis} />
            </div>


    );
};

export default Index;
