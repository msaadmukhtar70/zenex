
import React from 'react';


interface DataType {
  id: string;
  title: string;
  description: string;
}
const service_data: DataType[] = [
  {
    id: 'one',
    title: "Understand",
    description: "Every project starts with listening. We dive deep into your business goals, target audience, and challenges so we can build the right digital solution — not just a pretty one."
  },
  {
    id: 'Two',
    title: "Design",
    description: "Once we have a clear strategy, we craft wireframes, prototypes, and high-fidelity UI designs that align with your brand and user needs — always with scalability and conversion in mind."
  },
  {
    id: 'Three',
    title: "Development",
    description: "Our dev team brings your design to life with clean, scalable code — whether it’s a website, app, or SaaS platform. We focus on performance, security, and long-term maintainability."
  },
  {
    id: 'Four',
    title: "Testing",
    description: "Before we go live, we run every project through thorough QA — checking for bugs, mobile responsiveness, load speed, and user flow. If it’s not solid, it doesn’t ship."
  }
]

const Service = () => {
  return (
    <>
      <div className="cs_height_115 cs_height_lg_60"></div>
      <section>
        <div className="cs_primary_bg">
          <div className="cs_height_135 cs_height_lg_70"></div>
          <div className="container">
            <div className="cs_section_heading_hr cs_style_1 cs_color_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">
                    Our Working Process
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>

            <div className="cs_height_100 cs_height_lg_70"></div>
            <div className="anim_div_ShowLeftSide">
              <div className="cs_work cs_work_1">
                <div className="cs_card_work cs_style_1 cs_color_1">
                  {service_data.map((item, i) => (
                    <div key={i} className="cs_card">
                      <div className="cs_card cs_style_1">
                        <div className="cs_posagation">
                          <div className="cs_work_style_1"></div>
                          <div className="cs_work_style_2"></div>
                        </div>
                        <div className="cs_stroke_number">
                          <span>{item.id}</span>
                        </div>
                      </div>

                      <h6 className="cs_work_title">{item.title}</h6>
                      <p className="cs_work_subtitle">
                        {item.description}
                      </p>
                    </div>

                  ))}

                </div>
              </div>
            </div>
          </div>
          <div className="cs_height_150 cs_height_lg_60"></div>
        </div>
      </section>
    </>
  );
};

export default Service;