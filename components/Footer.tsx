import Image from "next/image"
import logo from "../public/luxoclean.png" 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
type Props = {}
function Footer({}: Props) {
  return (
    <div className="mt-20 md:flex md:justify-between space-y-4 bg-[#5d5d5d] p-8 lg:px-40 md:px-20 md:py-10  md:items-center text-white">
       <div className="md:max-w-[400px] space-y-2">
        <Image src={logo} height={200} width={200} alt="spark and clean logo"  className="w-20"/>
        <p className="text-sm  ">LuxoClean: Luxury apartment cleaning. Exceptional service.</p>
       </div>
<div className="space-y-3">


       <div className="">
        <h1 className="text-orange underline text-xl font-bold">Company</h1>
        <p className="text-sm">About</p>
        <p className="text-sm">Services</p>
       </div>
       <div>
        <h1 className="text-orange underline text-xl font-bold">Contact</h1>
        <p className="text-sm">Location: 211/251 West Coast Highway, Scarborough 6019</p>
        <p className="text-sm">Email: info@luxoclean.com.au</p>
        <p className="text-sm">Phone: 0431 032 396</p>
       </div>

       <div className="space-x-2">
        <InstagramIcon  className="hover:scale-125 cursor-pointer transition-all ease-linear duration-200"/>
        <FacebookIcon  className="hover:scale-125 cursor-pointer transition-all ease-linear duration-200"/>
        
        </div>

</div>
    </div>
  )
}
export default Footer;