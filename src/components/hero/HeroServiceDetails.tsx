import React from 'react';
import Image from 'next/image';
import banner_img from '@/assets/img/service_details_banner.jpg';

// ✅ Inline typing
const HeroServiceDetails = ({
  data,
}: {
  data: {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    faq: { question: string; answer: string }[];
    cta: string;
  };
}) => {
  const { title, description, features } = data;

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                {title}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image src={banner_img} alt="service_details_banner" />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">{description}</p>
                <ul className="anim_div_ShowDowns">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroServiceDetails;
