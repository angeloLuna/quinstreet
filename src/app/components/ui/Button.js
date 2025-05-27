import React from 'react'

export default function Button({text, disabled, disabledText}) {
  console.log("button", disabled)
  return (
    <button disabled={disabled} className={`cursor-pointer rounded-100 ${disabled ? 'bg-[gray]': 'bg-[#F6931D]'}  py-[14px] flex justify-center rounded-[100px] w-full`}>
      <span className='text-white tracking-[0.85px] font-medium uppercase  items-center'>{disabled? disabledText : text}</span>
    </button>
  )
}
