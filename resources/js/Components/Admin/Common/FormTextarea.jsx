import React from "react";

export default function FormTextarea({ label, name, value, onChange, placeholder, error }) {
    return (
        <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={4}
                className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
}
