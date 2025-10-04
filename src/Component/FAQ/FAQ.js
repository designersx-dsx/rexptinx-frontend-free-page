import React, { useState } from 'react'
import styles from '../FAQ/FAQ.module.css'

const FAQ = ({ scrollToHowItWorks }) => {
    const faqData = [
        {
            id: "features",
            title: "Functionality & Core Features",
            faqs: [
                {
                    id: "f1",
                    question: "What exactly is an AI Receptionist?",
                    answer: "An AI Receptionist is a virtual, software-based solution that uses advanced Artificial Intelligence (AI) and Natural Language Processing (NLP) to answer your business's incoming calls. It holds natural, human-like conversations, answers FAQs, qualifies leads, schedules appointments, and routes urgent calls—all without human intervention."
                },
                {
                    id: "f2",
                    question: "How does it handle calls outside of business hours?",
                    answer: "The AI operates 24 hours a day, 7 days a week, 365 days a year. It ensures every call, even at 2:00 AM on a holiday, is answered instantly, a message is taken, or an emergency is routed to an on-call team member, guaranteeing you never miss a lead."
                },
                {
                    id: "f3",
                    question: "Can the AI book appointments directly into my calendar?",
                    answer: "Yes. The service integrates seamlessly with popular calendar and scheduling platforms (e.g., Google Calendar, Outlook, industry-specific booking systems). The AI checks your real-time availability and books, reschedules, or cancels appointments during the call."
                },
                {
                    id: "f4",
                    question: "How human does the voice sound?",
                    answer: "Our technology uses the most advanced Text-to-Speech (TTS) models available, creating a voice that is virtually indistinguishable from a human. The AI is trained to use natural pauses, inflections, and conversational flow to ensure a professional and comfortable caller experience."
                },
            ],
        },
        {
            id: "integration",
            title: "Integration & Customization",
            faqs: [
                {
                    id: "i1",
                    question: "How do I train the AI to know my business's specific services and pricing?",
                    answer: "The system is trained using your business's existing information. This includes uploading your website content, current FAQs, service menus, pricing sheets, and custom-defined call flow rules. This ensures the AI's responses are 100% accurate and on-brand. We do this by utilizing our customer algorithm in combination with your Google My Business and Website. Our Agents also utilize Google Search to pick positive public information about your business to train itself. And Dont worry, we have Guardrails to make sure it does not cater to any SPAM or Profanity."
                },
                {
                    id: "i2",
                    question: "Can it integrate with my existing CRM and business software?",
                    answer: "Yes, absolutely. The AI is designed to integrate with major CRM platforms (like Salesforce, HubSpot, etc.), Practice Management Software, and Job Management Software via direct integrations or tools like Zapier. This allows it to automatically log call details, lead information, and transcripts in the right place. Our app is also available in prominent apps like Hubspot, Zoho, SquarePOS and many more. We also provide custom integrations if needed."
                },
                {
                    id: "i3",
                    question: "What happens to the information captured during the call?",
                    answer: "Every piece of information, from a new lead's name and project description to a booked appointment, is instantly logged and transcribed. This data is then sent to you via notifications, SMS, email, or directly into your integrated CRM/Job System, providing your team with complete context for follow-up."
                },
                {
                    id: "i4",
                    question: "Can I customize the greeting and AI's personality?",
                    answer: "Yes. You can fully customize the AI's name, the opening greeting, the tone (e.g., friendly, professional, casual), and the precise script it follows for key scenarios, ensuring brand consistency."
                },
            ],
        },
        {
            id: "handling",
            title: "Handling Complex & Urgent Calls",
            faqs: [
                {
                    id: "h1",
                    question: "What happens if a caller asks a question the AI can't answer?",
                    answer: "The system is programmed with intelligent handoff protocols. If the caller's request is too complex, involves a sensitive issue, or falls outside the defined knowledge base, the AI will seamlessly switch to Public knowledge-base to answer the question most efficiently and even offer to transfer the caller to a designated human staff member or take a detailed message for urgent follow-up."
                },
                {
                    id: "h2",
                    question: "How does the AI handle emergency calls (e.g., a burst pipe for a plumber)?",
                    answer: "For specific industries, the AI is trained to recognize urgent keywords (e.g., emergency, leak, no heat). Upon detection, it bypasses routine steps and immediately follows a priority call flow, such as texting your on-call technician or routing the call directly to a dedicated emergency line."
                },
                 {
                    id: "h3",
                    question: "Does the AI block spam or sales calls?",
                    answer: "Yes. A key feature is advanced spam and junk call filtering. The AI quickly identifies and deflects telemarketers, reducing the noise so your human team only deals with legitimate customer inquiries."
                },
                 
            ],
        },
        {
            id: "pricing",
            title: "Pricing, ROI & Security",
            faqs: [
                {
                    id: "p1",
                    question: "How much does an AI Receptionist cost compared to a human one?",
                    answer: "AI receptionists are significantly more cost-effective. While a human receptionist requires salary, benefits, sick pay, and office space (often costing $40,000+ annually), the AI solution operates on a predictable monthly subscription, typically based on call volume, offering substantial savings, up to 87% and 24/7 service."
                },
                {
                    id: "p2",
                    question: "What is the typical Return on Investment (ROI)?",
                    answer: "The primary ROI comes from lead capture. By answering 100% of calls, businesses report a significant reduction in missed leads, leading to increased revenue from new customer acquisition. It also frees up existing staff to focus on high-value tasks, increasing internal productivity."
                },
                {
                    id: "p3",
                    question: "Is my customer data secure? Is it HIPAA compliant for medical practices?",
                    answer: "Yes. Data security is paramount. The system adheres to strict industry-standard security protocols. For healthcare clients, the service can be configured to meet HIPAA compliance requirements for patient data privacy."
                },
                {
                    id: "p4",
                    question: "Are there any setup fees or hidden costs?",
                    answer: "The pricing structure is typically transparent. Setup fees may apply for complex integrations and extensive customization of call flows. Monthly plans are based on usage tiers, with clear per-minute or per-call overage rates defined upfront to ensure predictable budgeting."
                },
            ],
        },
    ];

    // Track active FAQ per column
    const [active, setActive] = useState({
        features: "f1",
        integration: "i1",
        handling: "h1",
        pricing: "p1",
    });

    const toggleAccordion = (sectionId, faqId) => {
        setActive((prev) => ({
            ...prev,
            [sectionId]: prev[sectionId] === faqId ? null : faqId,
        }));
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
                        <div className={styles.faqGrid}>
                            {faqData.map((section) => (
                                <div key={section.id} className={styles.faqColumn}>
                                    <h3 className={styles.columnTitle}>{section.title}</h3>

                                    {section.faqs.map((faq) => (
                                        <div
                                            key={faq.id}
                                            className={`${styles.faqItem} ${active[section.id] === faq.id ? styles.active : ""
                                                }`}
                                        >
                                            <div
                                                className={styles.questionRow}
                                                onClick={() => toggleAccordion(section.id, faq.id)}
                                            >
                                                <h4>{faq.question}</h4>
                                                <span className={styles.icon}>
                                                    {active[section.id] === faq.id ? "−" : "+"}
                                                </span>
                                            </div>
                                            <div
                                                className={`${styles.answerWrapper} ${active[section.id] === faq.id ? styles.open : ""
                                                    }`}
                                            >
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
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
