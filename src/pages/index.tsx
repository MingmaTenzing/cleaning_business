import Head from 'next/head'
import Image from 'next/image'
import Nav from '../../components/Nav'
import Landing from '../../components/Landing'
import Services from '../../components/Services'
import WhyChooseUs from '../../components/WhyChooseUs'
import AboutUs from '../../components/AboutUs'
import Estimate from '../../components/Estimate'
import Reviews from '../../components/Reviews'


export default function Home() {
  return (
    <>
      <Head>
        <title>Sparkle and Clean</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
    <main>

      <Nav />
      <Landing />
      <Services />
      <AboutUs />
      <WhyChooseUs />
      <Estimate />
      <Reviews />
     
    </main>
    </>
  )
}
