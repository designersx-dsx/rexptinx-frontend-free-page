import React, { useState } from 'react'
import styles from '../FAQ/FAQ.module.css'

const FAQ = ({ scrollToHowItWorks }) => {
    const faqs = [
        {
            question: "What exactly is an AI Receptionist?",
            answer:
                "An AI Receptionist is a virtual solution that uses Artificial Intelligence (AI) and Natural Language Processing (NLP) to handle your business's calls. It holds human-like conversations, answers FAQs, qualifies leads, schedules appointments, and routes urgent calls—all without human intervention."
        },
        {
            question: "How does it handle calls outside of business hours?",
            answer:
                "The AI operates 24 hours a day, 7 days a week, 365 days a year. It ensures every call, even at 2:00 AM on a holiday, is answered instantly, a message is taken, or an emergency is routed to an on-call team member, guaranteeing you never miss a lead."
        },
        {
            question: "Can the AI book appointments directly into my calendar?",
            answer:
                "Yes. The service integrates seamlessly with popular calendar and scheduling platforms (e.g., Google Calendar, Outlook, industry-specific booking systems). The AI checks your real-time availability and books, reschedules, or cancels appointments during the call."
        },
        {
            question: "How do I train the AI on my business’s services and pricing?",
            answer:
                "The system is trained using your business's existing information. This includes uploading your website content, current FAQs, service menus, pricing sheets, and custom-defined call flow rules. This ensures the AI's responses are 100% accurate and on-brand. We do this by utilizing our customer algorithm in combination with your Google My Business and Website. Our Agents also utilize Google Search to pick positive public information about your business to train itself. And Dont worry, we have Guardrails to make sure it does not cater to any SPAM or Profanity."
        },
        {
            question: "Can it integrate with my existing CRM and business software?",
            answer:
                "Yes, absolutely. The AI is designed to integrate with major CRM platforms (like Salesforce, HubSpot, etc.), Practice Management Software, and Job Management Software via direct integrations or tools like Zapier. This allows it to automatically log call details, lead information, and transcripts in the right place. Our app is also available in prominent apps like Hubspot, Zoho, SquarePOS and many more. We also provide custom integrations if needed."
        },
        {
            question: "What happens to the information captured during the call?",
            answer:
                "Every piece of information, from a new lead's name and project description to a booked appointment, is instantly logged and transcribed. This data is then sent to you via notifications, SMS, email, or directly into your integrated CRM/Job System, providing your team with complete context for follow-up."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div className={styles.containerBox}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.Title}>
                        <h1 className={styles.strokeText}>Frequently Asked Questions</h1>
                        <div className={styles.Strip}></div>
                    </div>

                    <div className={styles.SubtitleDiv}>
                        <h3 className={styles.subtitle}>Browse through our <span className='spanText '> FAQs Section </span> for most Common Questions Answered for You</h3>
                    </div>

                </div>


            </div>
            <div className={styles.BottomSection}>
                <div className={styles.ForestImg}>
                    <div className={styles.scroller}>
                        <img src="/Images/forest-img.png" alt="forest" />
                        <img src="/Images/forest-img2.png" alt="forest" />
                    </div>


                    <div className={styles.overlay}>
                        <div className={styles.left}>

                            <div className={styles.accordion}>
                                <h2 className={styles.Heading}>We understand that starting something new can bring questions. Here are some of the most common inquiries about our free AI receptionist.</h2>
                                {faqs.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.item} ${activeIndex === index ? styles.active : ""
                                            }`}
                                    >
                                        <div
                                            className={styles.titleRow}
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <h3 className={styles.question}>{item.question}</h3>
                                            <span className={styles.icon}>
                                                {activeIndex === index ? "−" : "+"}
                                            </span>
                                        </div>

                                        <div
                                            className={`${styles.contentWrapper} ${activeIndex === index ? styles.open : ""
                                                }`}
                                        >
                                            <p className={styles.content}>{item.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right section (Join box) */}
                        {/* <div className={styles.right}>
                            <div className={styles.joinBox} onClick={scrollToHowItWorks}>
                                <img src='Svg/join-rexpt.svg' alt='join-rexpt' />
                            </div>
                        </div> */}
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQ
