import React, { useRef, useState, useEffect } from 'react'
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
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const scrollToHowItWorks = () => {
    if (window.innerWidth > 1020) {
      const element = howItWorksRef.current;
      if (element) {
        const yOffset = 400;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setIsModalOpen(true);
    }
  };

  // Floating button show/hide logic (mobile only)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (window.innerWidth <= 1020 && scrollPercent >= 10) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // responsive check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
   
    <>
      <div>
        <FreeUser scrollToHowItWorks={scrollToHowItWorks} />
        <HassleFree />
        <div ref={howItWorksRef}>
          <HowItWorks />
        </div>
        <KeyFeatures scrollToHowItWorks={scrollToHowItWorks} />
        <WhyRexpt scrollToHowItWorks={scrollToHowItWorks} />
        <OurClient />
        <GetInTouch scrollToHowItWorks={scrollToHowItWorks} />
        <FAQ scrollToHowItWorks={scrollToHowItWorks} />
        <Footer />
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          bgColor="transparent"
          boxShadow="unset"
          closeColor="#fff"
        >
          <FreeAccount />
        </Modal>

        {/* Floating Button (Mobile Only) */}
        {showFloatingButton && (
          <div
            className="floatingButton" onClick={() => setIsModalOpen(true)}
          >
            <img src="Svg/join-rexpt.svg" alt="join-rexpt" />
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bgColor="transparent"
        boxShadow="unset" closeColor="#fff"
        // height="95dvh"
        maxWidth="500px"
      >
        <FreeAccount />
      </Modal>
    </>
  )
}

export default LandingPage
