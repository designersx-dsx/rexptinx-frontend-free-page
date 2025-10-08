import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "../OurClient/OurClient.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PortableText } from "@portabletext/react";

const ptComponents = {
  marks: {
    purple: ({ children }) => <span className="spanText">{children}</span>,
    break: ({ children }) => (
      <>
        <br />
        {children}
      </>
    ),
  },
};

const OurClient = ({ testimonialSection }) => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth <= 500) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 650) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    updateSlides(); 
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 650,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const testimonials = [
    {
      text: `“Before Rexpt, we were losing emergency calls after hours—and that's where the high-value jobs are. Now, Rexpt’s 24/7 AI captures every single lead, qualifies the emergency level, and texts the details straight to the on-call tech. We’ve seen a 30% jump in high-value night and weekend jobs.”`,
      author: "Mark Johnson",
      services: "Plumbing",
      company: "Coastal Pipe Services",
    },
    {
      text: `“Our biggest bottleneck was constantly fielding routine calls about pricing and booking service checks. Rexpt handles all of our appointment scheduling and FAQ answering seamlessly. It integrates directly with our calendar, freeing our office staff to focus on complex quotes.”`,
      author: "Sarah Chen",
      services: "Boiler Installation",
      company: "Hudson Valley HVAC",
    },
    {
      text: `“We switched from a traditional answering service that was expensive and constantly mixing up details. Rexpt is different. It’s smart enough to answer specific questions about city permits and our warranty policy, providing a professional, accurate response every time. It’s like hiring a seasoned receptionist for a fraction of the cost.”`,
      author: "David Lee",
      services: "Leak Detection",
      company: "Atlanta Metro Plumbers",
    },
    {
      text: `“As a small business owner, I used to cringe at the thought of paying a full-time receptionist. Rexpt gives us the professional front-desk service of a large corporation. Our customers are impressed with the instant response time, and the CRM integration means every new caller's details are logged perfectly for follow-up.”`,
      author: "Emily Davis",
      services: "Toilet & Faucet Repair",
      company: "Sunshine State Plumbing",
    },
    {
      text: `“In NYC, we deal with high call volumes during peak season. Rexpt's ability to handle multiple concurrent calls is invaluable. No more busy signals! It ensures every potential customer gets their service request logged and scheduled without waiting on hold, making us look incredibly efficient.”`,
      author: "Robert Brown",
      services: "Radiator Repair",
      company: "Big Apple Boilers",
    },
    {
      text: `“Rexpt completely solved our lead qualification problem. Before, we spent too much time on calls that weren’t serious. Now, the AI gathers all necessary service details and contact info, filtering out time-wasters and forwarding only ready-to-book customers. It's boosted our conversion rate significantly.”`,
      author: "Maria Garcia",
      services: "General Plumbing",
      company: "Peach State Plumbing",
    },
    {
      text: `“We are often on roofs and can't answer the phone. Rexpt has been a game-changer for capturing leads. The AI asks all the right qualifying questions—roof type, property size, service needed—and schedules the inspection/quote right into our calendar.”`,
      author: "Alex Rodriguez",
      services: "Residential Roof Installation",
      company: "South Beach Roofers",
    },
    {
      text: `“Storm damage means a flood of calls, often at 2 AM. Rexpt handles the massive spike in call volume flawlessly. It logs the exact location and nature of the emergency, assuring the customer and sending us the precise data we need to prioritize repairs. The reliability is unmatched.”`,
      author: "Michael Sullivan",
      services: "Leak Repairs",
      company: "Empire State Roofing",
    },
    {
      text: `“The cost of a dedicated full-time office assistant was eating into our profit margins. Rexpt does 90% of a receptionist's job for 80% less. It handles initial pricing FAQs and frees up my project manager to focus entirely on site work, not phone tag. Incredible cost savings.”`,
      author: "Lisa Bell",
      services: "Gutter Installation",
      company: "GA Gables & Shingles",
    },
    {
      text: `“The professionalism Rexpt provides is top-tier. Callers often comment on how knowledgeable our 'receptionist' is, as it can pull specific details about our materials and service areas. It projects a much larger, more established image for our smaller company.”`,
      author: "Jessica Kim",
      services: "Tile Roof Repair",
      company: "Coastal Composite",
    },
    {
      text: `“Integrating Rexpt with our CRM was surprisingly easy. Every phone call lead, including transcripts and summaries, is automatically logged under a new customer profile. Our sales team loves having all the initial details already organized before they call the lead back.”`,
      author: "William Miller",
      services: "Siding, Windows",
      company: "North Star Exteriors",
    },
    {
      text: `“Rexpt took the burden of appointment management off our plate entirely. It handles rescheduling, cancellations, and sends automatic reminders to the customers. This has dramatically reduced our 'no-show' rate for estimate appointments, meaning our field reps are no longer wasting time.”`,
      author: "Olivia Perez",
      services: "Ventilation Systems",
      company: "Peach Tree Roofing",
    },
    {
      text: `“Our phone used to ring off the hook, interrupting our mechanics. Now, Rexpt answers every call, provides our hours and location instantly, and schedules repair appointments directly into our shop management software. Our team's productivity has soared because they can finally focus on the cars.”`,
      author: "Carlos Reyes",
      services: "Brake Service",
      company: "Sun Coast Auto Repair",
    },
    {
      text: `“For a high-end repair shop, professionalism is key. Rexpt’s conversational AI sounds so natural and polished. It handles complex questions about specialized services and even coordinates after-hours key drop-off instructions perfectly. It’s the professional image we needed, 24/7”`,
      author: "Michelle Wang",
      services: "Brake Service",
      company: "Sun Coast Auto Repair",
    },
    {
      text: `“Rexpt ensures we never miss a lead call for a major repair again. When a customer calls outside business hours, the AI collects their vehicle details and contact info. We wake up to a booked appointment, ready to go, and it's all thanks to the 24/7 coverage.”`,
      author: "Henry Smith",
      services: "Transmission Repair",
      company: "Atlanta Gear Works",
    },
    {
      text: `“Customers constantly call asking for tire prices or stock checks. We uploaded our basic pricing sheet, and now Rexpt answers these tedious FAQs instantly and accurately. It saves us countless hours a week and ensures consistent information.”`,
      author: "Sandra Diaz",
      services: "Exhaust Repair",
      company: "Gulf Breeze Auto",
    },
    {
      text: `“Before Rexpt, our hold times were terrible during the morning rush. The AI handles all concurrent calls instantly. Customers are happy, they get service booked faster, and we've reduced customer frustration significantly. It's excellent for high-volume periods.”`,
      author: "Ben Katz",
      services: "General Auto Repair",
      company: "Queens Auto Clinic",
    },
    {
      text: `“The call transcripts are an unexpected lifesaver for fleet maintenance. We get detailed documentation of exactly what the driver requested, reducing the chance of miscommunication on the repair order. The data insights help us track common repair trends, too.”`,
      author: "Nicole Adams",
      services: "Alternator & Starter Repair",
      company: "City Center Garage",
    },
    {
      text: `“Our business relies on booking recurring appointments. Rexpt handles the complex booking logic—checking our availability, securing the client's information, and confirming the first service date—all without human intervention. This scheduling automation is the backbone of our growth.”`,
      author: "Kevin Wilson",
      services: "Residential Deep Cleaning",
      company: "Palm Coast Cleaners",
    },
    {
      text: `“We deal heavily with commercial clients who often call outside standard hours. Rexpt’s 24/7 availability ensures that when a property manager or business owner calls late, we capture that high-value lead immediately. It truly never misses an opportunity to sell our services.”`,
      author: "Anna Petrov",
      services: "Office Sanitization",
      company: "Gotham Green Cleaning",
    },
    {
      text: `“The AI is brilliant at filtering leads. We only offer service in specific zip codes. Rexpt automatically asks for the location and only proceeds with a quote inquiry if the address is within our service area. This saves our sales team hours of wasted time qualifying calls.”`,
      author: "Jamal Jackson",
      services: "Window Washing",
      company: "ATL Spotless Services",
    },
    {
      text: `“We use Rexpt to handle the initial pricing inquiries. We gave it our base rate structure, and it provides professional, consistent quotes for standard services. This frees up my time to focus on quality control and training staff.”`,
      author: "Chloe Lee",
      services: "Window Cleaning",
      company: "Sparkling Sunshine",
    },
    {
      text: `“For specialized services, clients have specific, technical questions. Rexpt’s ability to learn from our knowledge base and provide accurate answers about equipment and processes is incredible. It makes us sound like a huge, well-staffed operation.”`,
      author: "Mike Rossi",
      services: "Medical Office Cleaning",
      company: "Upstate Janitorial",
    },
    {
      text: `“The cost savings were immediate and significant. We were spending a fortune on a part-time remote receptionist. Now, Rexpt manages all initial communication, and the low monthly price is highly cost-effective, allowing us to invest more in equipment.”`,
      author: "Layla Khan",
      services: "Event Cleanup",
      company: "Southern Shine",
    },
    {
      text: `“Rexpt instantly created a more professional image for our firm. Callers are greeted by a knowledgeable AI that accurately routes calls—potential client to Project Manager, supplier to Purchasing, and billing inquiries to Accounting. This eliminated the transfer chaos we used to deal with.”`,
      author: "Richard Vance",
      services: "Commercial Build-Outs",
      company: "Florida Coast Builders",
    },
    {
      text: `“For high-value construction bids, the initial impression matters. Rexpt is perfect for lead qualification. It asks about project scope, budget range, and timeline before connecting the caller, ensuring my Project Managers only deal with serious inquiries. It’s a vital filter.”`,
      author: "Elena Popova",
      services: "Multi-Family Housing",
      company: "Tri-State Development",
    },
    {
      text: `“Running a busy remodeling company means we're often on-site with power tools going. Rexpt captures all incoming calls 24/7, even during the daytime when we can't hear the phone. The detailed call summaries let us follow up with new bid requests immediately after we finish work.”`,
      author: "Tony Nguyen",
      services: "Home Additions",
      company: "Southern Star Construction",
    },
    {
      text: `“We needed a solution that was available 24/7 during hurricane season for emergency recovery bids. Rexpt delivers, ensuring that those urgent, high-priority calls from property owners and insurance adjusters are logged instantly, giving us a head start on securing the work.”`,
      author: "Gene Foster",
      services: "Permit Expediting",
      company: "Sunshine State Contractors",
    },
    {
      text: `“Before Rexpt, if a supplier or subcontractor called after hours, they had to leave a voicemail. Now, the AI captures the message, transcribes it, and emails the relevant manager instantly. Our supply chain communication is faster and more reliable than ever.”`,
      author: "Carla Sanchez",
      services: "Concrete Work",
      company: "Liberty City Construction",
    },
    {
      text: `“The amount of time our front office staff spent answering routine questions about our typical project timelines was astounding. Rexpt now handles all of those FAQs, freeing up our administrative team to manage complex project documentation.”`,
      author: "Samuel King",
      services: "Project Management",
      company: "Georgia Commercial Works",
    },
    {
      text: `“Rexpt has revolutionized our patient booking system. It handles all appointment booking, rescheduling, and sending automated reminders. Our front office staff can now focus entirely on insurance claims and patient hospitality, leading to a much smoother operation and better patient flow.”`,
      author: "Dr. Alice Wong",
      services: "Teeth Whitening",
      company: "Coral Gables Dental",
    },
    {
      text: `“Our previous receptionist was overwhelmed handling complex insurance questions. Rexpt can accurately answer common questions about PPO plans and co-pays by accessing our knowledge base, giving patients instant, consistent insurance information, even after hours.”`,
      author: "Dr. John Thompson",
      services: "Root Canals",
      company: "Metro Dental Group",
    },
    {
      text: `“The reduction in no-shows has been fantastic. Rexpt integrates directly with our practice calendar and sends timely, polite appointment reminders via text or call, significantly improving patient compliance and keeping our schedule full.”`,
      author: "Dr. Aisha Hassan",
      services: "Digital X-Rays",
      company: "Midtown Atlanta Smiles",
    },
    {
      text: `“Patients often call outside of our office hours to schedule. Rexpt is available 24/7, allowing patients to book their own cleanings or request an emergency call-back at their convenience. We are capturing bookings we would have otherwise lost overnight.”`,
      author: "Dr. Mark Evans",
      services: "Sedation Dentistry",
      company: "Suncoast Family Dentistry",
    },
    {
      text: `“Our practice sees high-value executive clients who expect seamless service. Rexpt provides an incredibly professional, instant communication layer. The call transcripts are essential for tracking patient requests and ensuring zero errors in their files.”`,
      author: "Dr. Laura Bellini",
      services: "Executive Dental Care",
      company: "Financial District Dentistry",
    },
    {
      text: `“The ability to handle multiple calls simultaneously during high-demand times (like Monday mornings) is invaluable. No more long hold times, no more frustrating hang-ups. Rexpt ensures every patient feels valued and quickly addresses their request.”`,
      author: "Dr. Peter Chen",
      services: "Cosmetic Bonding",
      company: "Peachtree Dental",
    },
    {
      text: `“Rexpt has revolutionized our patient booking system. It integrates directly with our EMR scheduling software and handles appointment requests, cancellations, and confirmations. Our medical assistants now spend their time on direct patient care, not phone administration.”`,
      author: "Dr. Sarah Cooper",
      services: "General Practice",
      company: "Harmony Medical Group",
    },
    {
      text: `“Before Rexpt, patients would call our main line constantly with routine questions about prescription refills or office hours. Rexpt answers these FAQs accurately and professionally 24/7, reducing the noise for our clinical staff and ensuring immediate assistance for general inquiries.”`,
      author: "Dr. Robert Weiss",
      services: "Telehealth Services",
      company: "New York Family Care",
    },
    {
      text: `“The intelligent call routing is key for a multi-physician practice.Rexpt triages the call—routing prescription requests to the appropriate nurse line, billing questions to administration, and new patient inquiries to our intake coordinator—all based on the patient's voice response. It's incredibly effective.”`,
      author: "Dr. Jane Foster",
      services: "Preventive Medicine",
      company: "Atlanta Primary Care",
    },
    {
      text: `“For after-hours urgent care needs, Rexpt acts as a perfect first layer of triage. It collects the patient’s symptoms and contact info, providing a detailed summary to the on-call physician instantly. This ensures we can assess the urgency without having to answer every single late-night call ourselves.”`,
      author: "Dr. Michael Liu",
      services: "Urgent Care Triage",
      company: "Coastal Wellness Center",
    },
    {
      text: `“We serve a large geriatric population, and consistency is vital. Rexpt provides the same calm, clear, and professional response every time, ensuring no details are missed regarding their complex scheduling or medication questions. It’s a reliable, low-stress patient interface.”`,
      author: "Dr. Priya Patel",
      services: "Geriatric Care",
      company: "Hudson Health Clinic",
    },
    {
      text: `“As a private practice, cost control is crucial. Rexpt gives us the equivalent of two full-time phone staff for less than a fraction of one salary. The data analytics on call volume and patient interest also helps us staff more effectively. A huge financial win for our clinic.”`,
      author: "Dr. Ethan Brooks",
      services: "Diagnostic Imaging Scheduling",
      company: "Peachtree Health Group",
    },
  ];

  if (!testimonialSection) return null;

  const { sectionLabel, title, subtext, items = [] } = testimonialSection;
  return (
    <div className={styles.containerBox}>
      <div className={styles.container}>
        <div className={styles.LeftSection}>
          <div className={styles.Title}>
            <h1 className={styles.strokeText}>{sectionLabel}</h1>
            <div className={styles.Strip}></div>
          </div>

          <div className={styles.SubtitleDiv}>
            <h3 className={styles.subtitle}>
              {Array.isArray(title) && title.length ? (
                <PortableText value={title} components={ptComponents} />
              ) : (
                "What our Clients Say, "
              )}
              {!title && <span className="spanText">who use Rexpt</span>}
            </h3>
          </div>
          <div className={styles.description}>
          {Array.isArray(subtext) && subtext.length ? (
              <PortableText value={subtext} components={ptComponents} />
            ) : (
              <p>Testimonials and success stories from satisfied users.</p>
            )}
          </div>
        </div>
        <div className={styles.RightSection}>
          <div className={styles.sliderWrapper}>
            <Slider {...settings} ref={sliderRef}>
              {items.map((t, i) => (
                <div key={i}>
                  <div className={styles.card}>
                    <div className={styles.stars}> {"★".repeat(t.rating || 5)}</div>
                    {Array.isArray(t.quote) && t.quote.length ? (
                      <div className={styles.text}>
                        <PortableText
                          value={t.quote}
                          components={ptComponents}
                        />
                      </div>
                    ) : (
                      t.quotePlain && (
                        <p className={styles.text}>{t.quotePlain}</p>
                      )
                    )}

                    <p className={styles.author}>
                      — {t.author}
                      {t.Services ? <span>, {t.Services}</span> : null}
                    </p>
                    {t.company && <p className={styles.company}>{t.company}</p>}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className={styles.bothBtn}>
            <div
              className={styles.LeftBtn}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <img src="Svg/left-arrow.svg" alt="left-arrow" />
            </div>
            <div
              className={styles.RightBtn}
              onClick={() => sliderRef.current.slickNext()}
            >
              <img src="Svg/right-arrow.svg" alt="right-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
