import React from "react"

export default function MessageBox({ label, value, handleChange, placeholder, name, rows = 4 }) {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className=" text-sm my-4 text-brand-purple">{label}</label>}
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder || "Type your message..."}
        rows={rows}
        name={name}
        className="w-full px-4 py-2 border-none bg-gray-100 rounded-3xl outline-1 outline-brand-purple"
      />
    </div>
  )
}
