import React from "react";

export default function FormInput({ label, name, value, onChange, placeholder, error }) {
    return (
        <div>
            <label className="block mb-1 font-semibold">{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-2 border rounded"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}
