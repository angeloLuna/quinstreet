import Form from '@/app/components/Home/Form'
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