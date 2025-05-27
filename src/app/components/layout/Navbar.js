import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='h-20 bg-[#545253] flex justify-center items-center'>
      <Image
        alt="logo"
        src="/images/logo.svg"
        width={171}
        height={37}
      />
    </div>
  )
}
