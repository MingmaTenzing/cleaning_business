import Head from 'next/head'
import Image from 'next/image'
import Nav from '../../components/Nav'
import Landing from '../../components/Landing'
import Services from '../../components/Services'
import WhyChooseUs from '../../components/WhyChooseUs'
import AboutUs from '../../components/AboutUs'
import Estimate from '../../components/Estimate'
import Reviews from '../../components/Reviews'
import Footer from '../../components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>LuxoClean</title>
        <meta name="description" content="LuxoClean cleaning services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <meta property="og:image" content="/logo.png" />
      </Head>
    <main className="overflow-x-hidden">

      <Nav />
      <Landing />
      <Services />
      <section id='aboutus' >

      <AboutUs />
      </section>
      <WhyChooseUs />
      <Estimate />
      <Reviews />
      <Footer />
     
    </main>
    </>
  )
}
