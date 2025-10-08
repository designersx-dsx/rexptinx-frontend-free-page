import React, { useRef, useState, useEffect } from "react";
import FreeUser from "../../Component/FreeUser/FreeUser";
import HassleFree from "../../Component/HassleFree/HassleFree";
import HowItWorks from "../../Component/HowItWorks/HowItWorks";
import KeyFeatures from "../../Component/KeyFeatures/KeyFeatures";
import WhyRexpt from "../../Component/WhyRexpt/WhyRexpt";
import OurClient from "../../Component/OurClient/OurClient";
import GetInTouch from "../../Component/GetInTouch/GetInTouch";
import FAQ from "../../Component/FAQ/FAQ";
import Footer from "../../Component/Footer/Footer";
import Modal from "../../Component/Modal/Modal";
import FreeAccount from "../../Component/FreeAccount/FreeAccount";
import { client } from "../../lib/SanityConfig";
import {
  fetchHeroSection,
  fetchBadgeSection,
  fetchHowItWorks,
  fetchKeyFeaturesSection,
  fetchWhyRexptSection,
  fetchTestimonialsSection,
  fetchGetInTouch,
} from "../../lib/sanityQueries";

const LandingPage = () => {
  const howItWorksRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [heroSection, setHeroSection] = useState(null);
  const [badgeSection, setBadgeSection] = useState(null);
  const [howitworks, sethowitworks] = useState(null);
  const [keyfeatureSectiondata, setKeyFeatureSection] = useState(null);
  const [rexptSectionPage, setRexptSectionPage] = useState(null);
  const [testimonialSection, setTestimonialSection] = useState(null);
  const [getInTouch, setgetInTouch] = useState(null);
  console.log(getInTouch, "getInTouch");
  useEffect(() => {
    Promise.all([
      client.fetch(fetchHeroSection),
      client.fetch(fetchBadgeSection),
      client.fetch(fetchHowItWorks),
      client.fetch(fetchKeyFeaturesSection),
      client.fetch(fetchWhyRexptSection),
      client.fetch(fetchTestimonialsSection),
      client.fetch(fetchGetInTouch),
    ])
      .then(
        ([
          heroData,
          badgeData,
          howitworksdata,
          fetchKeyFeaturesSectiondata,
          rexptSectionData,
          testimonialdata,
          getInTouchData,
        ]) => {
          setHeroSection(heroData);
          setBadgeSection(badgeData);
          sethowitworks(howitworksdata);
          setKeyFeatureSection(fetchKeyFeaturesSectiondata);
          setRexptSectionPage(rexptSectionData);
          setTestimonialSection(testimonialdata);
          setgetInTouch(getInTouchData);
        }
      )
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const scrollToHowItWorks = () => {
    if (window.innerWidth > 1020) {
      const element = howItWorksRef.current;
      if (element) {
        const yOffset = 400;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setIsModalOpen(true);
    }
  };

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
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        {/* {heroSection?.enabled === true && ( */}
        <FreeUser
          scrollToHowItWorks={scrollToHowItWorks}
          heroSection={heroSection}
        />
        {/* )} */}
        {/* {badgeSection?.enabled === true && ( */}
        <HassleFree badgeSection={badgeSection} />
        {/* )} */}
        {/* {howitworks?.enabled === true && ( */}
        <div ref={howItWorksRef}>
          <HowItWorks howitworks={howitworks} />
        </div>
        {/* )} */}
        <KeyFeatures
          scrollToHowItWorks={scrollToHowItWorks}
          keyfeatureSectiondata={keyfeatureSectiondata}
        />
        <WhyRexpt
          scrollToHowItWorks={scrollToHowItWorks}
          rexptSectionPage={rexptSectionPage}
        />
        <OurClient testimonialSection={testimonialSection} />
        <GetInTouch
          scrollToHowItWorks={scrollToHowItWorks}
          getInTouch={getInTouch}
        />
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
          <div className="floatingButton" onClick={() => setIsModalOpen(true)}>
            <img src="Svg/join-rexpt.svg" alt="join-rexpt" />
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bgColor="transparent"
        boxShadow="unset"
        closeColor="#fff"
        // height="95dvh"
        maxWidth="500px"
      >
        <FreeAccount />
      </Modal>
    </>
  );
};

export default LandingPage;
