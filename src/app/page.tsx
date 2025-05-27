import Form from '@/app/components/Home/Form'
import Image from 'next/image';
import Advertorial from '@/app/components/Home/Advertorial'

export default function Home() {
  return (
    <div className="bg-[url('/images/background.png')] h-[96vh] border bg-repeat-x bg-top overflow-auto w-full ">
      <div className="font-[family-name:var(--font-montserrat)] box-border p-[20px] md:pt-[33px] flex items-center flex-col animate-bg-pulse ">

        <Form />
        <Advertorial />
      </div>
    </div>
  );
}

{/* <h1 className="font-light text-[16px] text-[#747375]">Phone Number</h1>
<h1 className="font-normal text-[16px] text-[#747375]">Phone Number</h1>
<h1 className="font-medium text-[16px] text-[#747375]">Phone Number</h1>
<h1 className="font-semibold text-[16px] text-[#747375]">Phone Number</h1>
<h1 className="font-bold text-[16px] text-[#747375]">Phone Number</h1>
<h1>Text</h1> */}
//  w-screen