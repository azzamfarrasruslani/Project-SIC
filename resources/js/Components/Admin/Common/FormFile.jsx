import React from "react";

export default function FormFile({ label, name, onChange, error }) {
    return (
        <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
            <input
                type="file"
                name={name}
                onChange={onChange}
                className={`w-full px-4 py-2 border rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
}
