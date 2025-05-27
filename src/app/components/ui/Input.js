'use client'
import React, {useState} from 'react'

export default function Input({ placeholder, type, required, minLength, onChange }) {
  const [error, setError] = useState(false)

  const checkValiditi = (e) => {
    setError(!e.target.checkValidity())
    console.log("ASDSAD", )
    onChange(e)
  }
  return (
    <div className={`shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] border ${error? 'border-[#D50303]': 'border-[#D8D8D8]'} rounded-sm py-2.5 mb-5 w-full`}>
      <input 
        type={type} 
        placeholder={placeholder} 
        required={required}
        minLength={minLength}
        onChange={(e) => checkValiditi(e)}
        className='pl-[25.19px] text-[16px] font-medium py-10px outline-hidden w-full box-border'/>
    </div>
  )
}
