import Head from "next/head"
import Nav from "../../components/Nav"
import Services from "../../components/Services"
import Footer from "../../components/Footer"
import Image from "next/image"
import serviceimg from  "../../assests/serviceimg.jpg"

type Props = {}
function ServicesPage({}: Props) {
  return (
    <>
    <Head>
        <title>Sparkle and Clean</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
    
    <div>
        <Nav/>
        <div className="relative">
            
        <Image src={serviceimg} width={1920} height={1080} alt= 'cleanign service' className="h-[200px] object-cover object-center brightness-50" /> 
        <h1 className="text-white font-bold text-2xl md:text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Services</h1>
       
        </div>
        <div className="-mt-40 lg:-mt-20">

        <Services  />
        </div>
        <Footer/>

    </div>
    </>
  )
}
export default ServicesPage