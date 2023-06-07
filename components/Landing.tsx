
import Image from "next/image"
import bg from "../assests/bg-photo.jpg"
import Link from "next/link"
type Props = {}
function Landing({}: Props) {
  return (
<div className=" ">
    <div className="absolute top-0 left-0 -z-20 ">
    <Image src={bg} alt="bg-photo" width={5760} height={3840}  className=" h-[100vh] md:h-[80vh] lg:h-[100vh] brightness-75 object-cover  bg-no-repeat"/>

    </div>
    <div className="p-4 mt-[200px] lg:mt-[90px] space-y-4 md:w-[400px] lg:w-[450px] pl-10">
        <h1 className=" text-5xl md:text-6xl text-white font-[900]">Best House <span className="text-orange"> Cleaning </span>  Services in the Town</h1>
        <p className="text-white text-sm">You can trust our team of experienced cleaners to tackle your cleaning tasks, giving you more time to dedicate to the things that matter to you.</p>
       <Link href="/contact" className="">
         <button className=" mt-4 font-bold text-white bg-red rounded-lg px-4 py-2 "> Get Quote</button>
        </Link>
 </div>

    
</div>  )
}
export default Landing