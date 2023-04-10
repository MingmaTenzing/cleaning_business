import Image from "next/image"
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useRouter } from "next/router"
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { motion } from "framer-motion"
import { duration } from "@mui/material";

type Props = {}
function Nav({}: Props) {
  const variant = {
    open: {opacity:1, x:0},
    closed: {opacity:0, x:'100%'}
    
  }
 
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  console.log(openMenu)
  return (
    <div className="relative flex justify-between items-center p-4 bg-navbg text-white">
        <div>

     <Link href="/">
        <Image src="/logo.png" width={100} height={100} alt="logo"   className=" w-16"/>
     
     </Link>
        </div>
        <div className="hidden md:flex space-x-5 ">
        
        <Link href="/">
        <p className="  hover:text-orange cursor-pointer"> Home</p>
        
        </Link>
      <Link href="/services">
        <p className="  hover:text-orange cursor-pointer"> Services</p>
      
      </Link>
        <p className=" hover:text-orange cursor-pointer "> About</p>
        <p className="  hover:text-orange cursor-pointer"> Contact</p>

        </div>
        <div className="flex space-x-3">
            <button className=" hover:bg-gray-600 text-sm px-2 py-2 bg-orange rounded-lg text-white  font-semibold">Book schedule</button>
        <div className=" md:hidden">
            <Bars3Icon className="w-8" onClick={() => setOpenMenu(!openMenu)} />
        </div>
        </div>
 <motion.div
  animate={openMenu ? "open" : "closed"}
  variants={variant}
  transition={{ ease: 'linear', duration: 0.2}}
 
  className="absolute w-[50%] h-[100vh] bg-white top-0 left-1/2   z-50">
  <div className="absolute right-2 p-4 ">
    <CloseIcon  className="text-black  " fontSize="large"  onClick={() => setOpenMenu(!openMenu)} />
    
  </div>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
 <Link href="/">
  <p className="  font-semibold   text-xl; text-gray-800  my-2">Home</p>
 
 </Link>
 <Link href="/services">
  <p className="  font-semibold   text-xl; text-gray-800 my-2">Services</p>
 
 </Link>

 <Link href="">
  <p className=" font-semibold  text-xl; text-gray-800 my-2">Contact Us</p>
 
 </Link>

  </div>

</motion.div>

       
    </div>
  )
}
export default Nav