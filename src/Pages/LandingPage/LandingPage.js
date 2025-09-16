import React from 'react'
import FreeUser from '../../Component/FreeUser/FreeUser'
import HassleFree from '../../Component/HassleFree/HassleFree'
import HowItWorks from '../../Component/HowItWorks/HowItWorks'
import KeyFeatures from '../../Component/KeyFeatures/KeyFeatures'
import WhyRexpt from '../../Component/WhyRexpt/WhyRexpt'
import OurClient from '../../Component/OurClient/OurClient'
import GetInTouch from '../../Component/GetInTouch/GetInTouch'
// import SliderSection from '../../Component/SliderSection/SliderSection'
import FAQ from '../../Component/FAQ/FAQ'
import Footer from '../../Component/Footer/Footer'
const LandingPage = () => {
  return (
    <div>
      <FreeUser/>
      <HassleFree/>
      <HowItWorks/>
      <KeyFeatures/>
      <WhyRexpt/>
      <OurClient/>
      <GetInTouch/>
      <FAQ/>
      {/* <SliderSection/> */}

      <Footer/>
    </div>
  )
}

export default LandingPage
