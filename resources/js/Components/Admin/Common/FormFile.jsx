import React from "react";

export default function FormFile({ label, name, onChange, error }) {
    return (
        <div>
            <label className="block mb-1 font-semibold">{label}</label>
            <input
                type="file"
                name={name}
                onChange={onChange}
                className="w-full p-2 border rounded"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}
