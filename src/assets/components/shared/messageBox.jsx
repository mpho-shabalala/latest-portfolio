import React from "react"

export default function MessageBox({ label, value, onChange, placeholder, rows = 4 }) {
  return (
    <div className="flex flex-col   space-y-2">
      {label && <label className=" text-sm font-medium text-brand-purple">{label}</label>}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Type your message..."}
        rows={rows}
        className="w-full px-4 py-2 border-none bg-gray-100 rounded-3xl outline-1 outline-brand-purple"
      />
    </div>
  )
}
