import React from 'react'
import Link from 'next/link'

export default function Advertorial() {
  return (
    <div className='pt-[35px] md:pt-[33px]'>

      <div className="border-b-2 border-l-2 border-r-2 border-[#A0BC57] relative pb-[15px] px-[21px] pt-[17px] w-fit mx-auto">

        <div className="absolute top-0 left-0 w-[40px] h-[2px] bg-[#A0BC57]"></div>
        <div className="absolute top-0 right-0 w-[40px] h-[2px] bg-[#A0BC57]"></div>

        <h2 className="absolute -top-2 -left-0 -right-0 text-center text-[#444] text-sm font-medium tracking-wide mb-3">
          EVEN MORE SAVINGS
        </h2>

        <div className="space-y-2 bg-white w-[400px] pt-[11px] px-[21px] pb-[46px]">
          <p className="text-[#A0BC57] text-sm font-medium tracking-wide">ADVERTORIAL</p>
          <h3 className="text-[#545253] text-[20px] font-medium leading-snug tracking-tight">
            Tricks Homeowners Use to Eliminate Bills
          </h3>
          <p className="text-[#545253] font-medium text-[14px] leading-relaxed">
            Surging energy bills, unpredictable weather patterns and dissatisfaction with utility companies have homeowners scrambling…{' '}
            <Link href="https://google.com"  target="_blank" rel="noopener noreferrer">
              <span className="text-[#6EB7C2] font-medium cursor-pointer">READ MORE</span>
            </Link>
          </p>
        </div>
      </div>
    </div>

  )
}
