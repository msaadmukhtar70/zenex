
'use client'
import React, { useState } from 'react';


interface DataType {
  id: string;
  question: string;
  ans: string;
}
const faq_data: DataType[] = [
  {
    id: "One",
    question: "What is the design process for branding?",
    ans: "Our branding process starts with discovery — we dive into your vision, values, market, and audience. From there, we develop your visual identity, including logo, typography, color palette, and brand voice. You’ll receive moodboards, drafts, and refined iterations until we land on a look and feel that’s not just beautiful, but strategic."
  },
  {
    id: "Two",
    question: "What services does your agency offer?",
    ans: "We offer end-to-end digital services including custom website and app development, UI/UX design, branding and identity, AI-powered automation, digital marketing (SEO, PPC, content), and strategic consulting. Whether you're launching a startup or scaling a product, we’ve got you covered."
  },
  {
    id: "Three",
    question: "How do you approach a new project?",
    ans: "Every project begins with understanding — your goals, audience, and market. We start with a discovery session, then move into strategy, design, and development phases. You’ll get a clear roadmap, regular updates, and full transparency from start to finish."
  },
  {
    id: "Four",
    question: "How do you handle revisions or changes to a project?",
    ans: "We build feedback into every phase. For design and development, we typically include 2–3 rounds of revisions depending on your package. We encourage open communication and adapt to reasonable changes along the way — because great results come from collaboration."
  },
  {
    id: "Five",
    question: "How do you determine pricing for your services?",
    ans: "Our pricing is tailored based on your project scope, timeline, and complexity. After our initial consultation, we’ll provide a clear, no-obligation proposal. We’re transparent about costs — no hidden fees or surprise charges."
  },
  {
    id: "Six",
    question: "Do you offer long-term support or maintenance?",
    ans: "Yes! We offer optional maintenance plans for websites, apps, and marketing campaigns. Whether it’s regular updates, performance checks, SEO improvements, or ongoing design tweaks — we’re here for long-term support."
  },
  {
    id: "Seven",
    question: "What industries do you work with?",
    ans: "We’ve worked across various industries including SaaS, e-commerce, health & wellness, education, finance, and startups. What matters most is your vision — if it’s digital, we can help build it."
  },
  {
    id: "Eight",
    question: "Do you work with startups or just established companies?",
    ans: "We work with both! Many of our clients are early-stage startups looking to build MVPs or launch brands, but we also help established businesses refresh their digital presence or scale their platforms."
  },
  {
    id: "Nine",
    question: "How long does a typical project take?",
    ans: "It depends on the scope. A basic website might take 3–5 weeks, while a full SaaS product could take 2–4 months. After our discovery session, we’ll share a timeline tailored to your needs and keep you informed every step of the way."
  },
  {
    id: "Ten",
    question: "Can you work with our in-house team?",
    ans: "Absolutely. We often collaborate with internal teams — whether it's your developers, marketers, or designers. We’re flexible and happy to plug into your existing workflow to make sure everything runs smoothly."
  }
]


const FaqArea = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <div className="mb-3 anim_text_writting">FAQ</div>
            <h2 className="cs_section_title anim_text_writting">
              Answers to Common Questions We Get From Clients
            </h2>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>

      <div className="container">
        <div className="cs_accordeon anim_div_ShowDowns">
          {faq_data.map((item, i) =>
            <div key={i} 
            onClick={() => toggleAccordion(i)}
            className={`cs_accordion_item cs_color_1 ${i === activeIndex ? 'active cs_icon' : ''}`}>
              <div className="cs_accordion_header">
                <p className="cs_accordion_title cs_m0" id={`heading${item.id}`}>
                  {item.question}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="30" style={{ transform: i === activeIndex ? 'rotate(-90deg)' : 'none' }}>
                  <path style={{ fill: `#ffffff` }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right" />
                </svg>
              </div>

              <div className={`cs_accordion_body ${i === activeIndex ? '' : 'd-none'}`}>
                {item.ans}
              </div>
            </div>
          )} 

        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default FaqArea;