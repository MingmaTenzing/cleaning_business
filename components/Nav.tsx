import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { duration } from "@mui/material";

type Props = {};
function Nav({}: Props) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className=" flex justify-between  items-center p-4 bg-navbg text-white overflow-x-hidden">
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="logo"
            className=" w-16"
          />
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
     <Link href="/contact">
       <button className=" hover:bg-gray-600 text-sm px-2 py-2 bg-orange rounded-lg text-white  font-semibold">
          Book schedule
        </button>
     
     </Link> 
        <div className=" md:hidden">
          <Bars3Icon className="w-8" onClick={() => setOpenMenu(!openMenu)} />
        </div>
      </div>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute h-[100vh] bg-white top-0 right-0 z-50  w-[50%]  transition-all ease-linear  duration-150   md:hidden `}
          >
            <div className="absolute right-2 p-4 ">
              <CloseIcon
                className="text-black  "
                fontSize="large"
                onClick={() => setOpenMenu(!openMenu)}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
              <Link href="/">
                <p className="  font-semibold   text-xl; text-gray-800  my-2">
                  Home
                </p>
              </Link>
              <Link href="/services">
                <p className="  font-semibold   text-xl; text-gray-800 my-2">
                  Services
                </p>
              </Link>

              <Link href="/contact">
                <p className=" font-semibold  text-xl; text-gray-800 my-2">
                  Contact Us
                </p>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Nav;
