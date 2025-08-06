import React from 'react';
import Link from 'next/link';


interface DataType {
  id: number;
  title: string;
  description: string;
  slug: string;
}

const banner_data: DataType[] = [
  {
    id: 1,
    title: "Web & App Development",
    description: "We build fast, scalable, and user-focused websites, web apps, and SaaS platforms that perform beautifully across all devices. From MVPs to full-scale systems — we bring your vision to life with clean code and smart tech.",
    slug: "web-app-development"
  },
  {
    id: 2,
    title: "Product & UI/UX Design",
    description: "Great design drives results. We craft intuitive user interfaces, wireframes, and design systems that make your product not just look amazing, but work flawlessly and convert effortlessly.",
    slug: "product-ui-ux-design"
  },
  {
    id: 3,
    title: "Branding & Identity",
    description: "Your brand is more than a logo — it's how people remember you. We help shape your visual identity, tone, and messaging into something meaningful, memorable, and built to last.",
    slug: "branding-identity"
  },
  {
    id: 4,
    title: "AI & Automation Solutions",
    description: "Supercharge your business with custom AI tools and automation. From chatbots to workflow systems, we help you streamline operations and elevate the user experience with intelligent technology.",
    slug: "ai-automation-solutions"
  },
  {
    id: 5,
    title: "Digital Marketing & Growth",
    description: "We help you get found, chosen, and remembered. Our marketing services include SEO, content strategy, PPC campaigns, and conversion optimization — all designed to drive measurable growth.",
    slug: "digital-marketing-growth"
  },
  {
    id: 6,
    title: "Strategy & Consulting",
    description: "Not sure where to start? We'll help you shape your idea, plan your roadmap, and choose the right tech stack. Whether you're launching a product or scaling one, we guide your digital journey from strategy to success.",
    slug: "strategy-consulting"
  }
]


const HeroService = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_word_writting">
                Build, Launch, and Grow - All with One Digital Partner
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_1_list">
            {banner_data.map((item, i) =>
              <div key={i} className="cs_card cs_style_1 anim_div_ShowDowns">
                <div className="cs_card_left">
                  <div className="cs_card_number cs_primary_font" style={{ backgroundImage: `url('/assets/img/hero_img_1.jpg')` }}>
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href={`/service-details/${item.slug}`}>{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">{item.description}</div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <Link href={`/service-details/${item.slug}`} className="cs_card_link">
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            )} 

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroService;