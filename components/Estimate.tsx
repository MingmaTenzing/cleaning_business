import Image from "next/image"
import callimg from "../assests/call.jpg"

type Props = {}
function Estimate({}: Props) {
  return (
    <>
  
    
  
   <div className="relative  h-[500px] mt-10">
    <div>
      <Image src={callimg} width={1920} height={1080} alt='call img'  className=" h-[500px] object-cover object-center brightness-50"/>
    </div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  md:flex md:justify-center md:items-center   ">
      <div className="text-4xl text-white font-bold text-center md:text-start mr-4 w-[300px] lg:w-[400px] space-y-3">
       <p>
        Let's get an estimate of your project
        </p> 
        <p className="text-sm hidden md:flex max-w-[250px]">Fill up the form and we will get in touch with you right after</p>
      </div>
      <form className="space-y-3 flex flex-col items-center justify-center">
        <div className="flex flex-col item">
          <label className="text-white">Name</label>
          <input type="text" className="rounded-lg px-5 py-2 w-[300px] text-gray-600 text-sm outline-none focus:border focus:border-orange " required />
        </div>
        <div className="flex flex-col item">
          <label className="text-white">Email Address</label>
          <input type="email" className="rounded-lg px-5 w-[300px] py-2 text-gray-600 text-sm outline-none focus:border focus:border-orange " required />
        </div>
        <div className="flex flex-col item">
          <label className="text-white">Contact Number</label>
          <input type="text" className="rounded-lg px-5 w-[300px] py-2 text-gray-600 text-sm outline-none focus:border focus:border-orange " required />
        </div>
        <button className="bg-red text-white px-3 py-1 rounded-lg ">Let's Go</button>
      </form>
    </div>


    </div>
    </>
  )
}
export default Estimate