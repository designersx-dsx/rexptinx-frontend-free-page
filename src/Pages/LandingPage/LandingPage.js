import React, { useRef, useState } from 'react'
import FreeUser from '../../Component/FreeUser/FreeUser'
import HassleFree from '../../Component/HassleFree/HassleFree'
import HowItWorks from '../../Component/HowItWorks/HowItWorks'
import KeyFeatures from '../../Component/KeyFeatures/KeyFeatures'
import WhyRexpt from '../../Component/WhyRexpt/WhyRexpt'
import OurClient from '../../Component/OurClient/OurClient'
import GetInTouch from '../../Component/GetInTouch/GetInTouch'
import FAQ from '../../Component/FAQ/FAQ'
import Footer from '../../Component/Footer/Footer'
import Modal from '../../Component/Modal/Modal'
import FreeAccount from '../../Component/FreeAccount/FreeAccount'
const LandingPage = () => {
  const howItWorksRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToHowItWorks = () => {
    if (window.innerWidth > 1020) {
      // scroll kare
      const element = howItWorksRef.current;
      if (element) {
        const yOffset = 400;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // modal open kare
      setIsModalOpen(true);
    }
  };


  return (
    <div>
      <FreeUser scrollToHowItWorks={scrollToHowItWorks} />
      <HassleFree />
      <div ref={howItWorksRef} >
        <HowItWorks />
      </div>
      <KeyFeatures scrollToHowItWorks={scrollToHowItWorks} />
      <WhyRexpt scrollToHowItWorks={scrollToHowItWorks} />
      <OurClient />
      <GetInTouch scrollToHowItWorks={scrollToHowItWorks} />
      <FAQ scrollToHowItWorks={scrollToHowItWorks} />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} bgColor="transparent"
        boxShadow="unset" closeColor="#fff">
        <FreeAccount />
      </Modal>
    </div>
  )
}

export default LandingPage
