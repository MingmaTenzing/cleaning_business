import Image from "next/image"
import { Bars3Icon } from '@heroicons/react/24/solid'

type Props = {}
function Nav({}: Props) {
  return (
    <div className="flex justify-between items-center p-4 bg-navbg text-white">
        <div>

        <Image src="/logo.png" width={100} height={100} alt="logo"  className=" w-16"/>
        </div>
        <div className="hidden md:flex space-x-5 ">
        <p className="  hover:text-orange cursor-pointer"> Home</p>
        <p className="  hover:text-orange cursor-pointer"> Services</p>
        <p className=" hover:text-orange cursor-pointer "> About</p>
        <p className="  hover:text-orange cursor-pointer"> Contact</p>

        </div>
        <div className="flex space-x-3">
            <button className=" hover:bg-gray-600 text-sm px-2 py-2 bg-orange rounded-lg text-white  font-semibold">Book schedule</button>
        <div className=" md:hidden">
            <Bars3Icon className="w-8" />
        </div>
        </div>
    </div>
  )
}
export default Nav