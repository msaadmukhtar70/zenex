const serviceDetails = [
  {
    slug: "web-app-development",
    title: "Web & App Development",
    subtitle: "Powerful, custom-built web and mobile applications for scalable growth.",
    description: `Our expert developers create secure, reliable, and high-performing web and mobile applications tailored specifically to your business needs. Whether you're launching an innovative startup MVP, a complex SaaS platform, or enhancing an enterprise application, we deliver products designed for seamless growth and optimal user experience.`,
    features: [
      "Full-stack web & mobile app development (React, Next.js, Node.js, Django)",
      "Mobile-first, responsive design for optimal usability",
      "Custom CMS or headless CMS integration (Contentful, Strapi)",
      "Scalable SaaS platforms & MVP development",
      "RESTful API development and seamless third-party integrations",
      "Reliable maintenance & ongoing technical support",
    ],
    faq: [
      {
        question: "Do you build custom solutions or use templates?",
        answer: "We specialize in fully custom-built solutions. Every application we deliver is uniquely designed and developed according to your specific goals—no generic templates.",
      },
      {
        question: "Can you help us launch our MVP quickly?",
        answer: "Absolutely! We specialize in rapid yet high-quality MVP launches, enabling you to validate your concept quickly with a scalable technical foundation.",
      },
      {
        question: "Will our apps be scalable for future growth?",
        answer: "Yes. Our solutions are built with scalability in mind, ensuring your applications easily adapt and scale as your business grows.",
      }
    ],
    cta: "Got an app idea or digital product in mind? Let’s discuss and build something exceptional together.",
    images: [
      '/assets/img/service_slider_1.jpg',
      '/assets/img/service_slider_2.jpg'
    ]
  },
  {
    slug: "product-ui-ux-design",
    title: "UI/UX & Product Design",
    subtitle: "Designing intuitive digital experiences your users will love.",
    description: `We create engaging, intuitive, and conversion-optimized user experiences through meticulous UI/UX design. From extensive UX research to detailed prototyping and polished user interfaces, we help your brand deliver memorable digital interactions.`,
    features: [
      "User research & UX strategy",
      "Interactive wireframes and detailed prototypes",
      "Custom UI designs optimized for web & mobile",
      "Robust design systems and style guides",
      "Conversion-focused landing page design",
    ],
    faq: [
      {
        question: "Will we have input into the design process?",
        answer: "Definitely. We maintain a collaborative design approach, regularly seeking your input at every step to ensure alignment with your vision.",
      },
      {
        question: "Do you provide clickable prototypes?",
        answer: "Yes. We deliver interactive, clickable prototypes that allow you to experience the flow of your product early and give valuable feedback before final design.",
      }
    ],
    cta: "Ready to delight your users and drive conversions? Let’s design your product together.",
    images: [
      '/assets/img/uiux_slider_1.jpg',
      '/assets/img/uiux_slider_2.jpg'
    ]
  },
  {
    slug: "branding-identity",
    title: "Branding & Identity",
    subtitle: "Build a distinctive brand your customers connect with instantly.",
    description: `We craft memorable and strategic brand identities that resonate deeply with your target audience. From creative logo design and visual guidelines to clear messaging frameworks, we ensure your brand consistently communicates your unique value.`,
    features: [
      "Creative logo & brand mark design",
      "Detailed visual identity guidelines (colors, typography, imagery)",
      "Clear brand messaging & tone-of-voice documentation",
      "Professional pitch decks & branded collateral design",
      "Custom packaging and stationery solutions",
    ],
    faq: [
      {
        question: "How many logo concepts do you typically provide?",
        answer: "We usually offer 2-3 distinct logo concepts, then refine your chosen concept collaboratively until it perfectly represents your brand.",
      },
      {
        question: "Will we receive brand guidelines?",
        answer: "Yes. We deliver comprehensive brand guidelines, including visual and strategic elements, to ensure consistent representation across all channels.",
      }
    ],
    cta: "Want a compelling brand identity that stands out? Let’s create it together.",
    images: [
      '/assets/img/branding_slider_1.jpg',
      '/assets/img/branding_slider_2.jpg'
    ]
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    subtitle: "Creative visuals designed to captivate your audience and boost engagement.",
    description: `We deliver striking, high-quality graphic design services for digital and print, helping your brand communicate visually and effectively. From social media creatives and marketing collateral to professional pitch decks, our designs help you make a lasting impression.`,
    features: [
      "Engaging social media graphics",
      "Impactful digital & print collateral (brochures, flyers, etc.)",
      "Professional pitch decks & presentations",
      "Eye-catching advertising banners & marketing assets",
    ],
    faq: [
      {
        question: "Can you maintain consistency with our existing brand style?",
        answer: "Absolutely. We ensure all designs seamlessly align with your established brand identity and guidelines.",
      }
    ],
    cta: "Need impactful visuals? Let’s enhance your brand’s presence together.",
    images: [
      '/assets/img/graphic_design_slider_1.jpg',
      '/assets/img/graphic_design_slider_2.jpg'
    ]
  },
  {
    slug: "digital-marketing-growth",
    title: "Digital Marketing & Growth",
    subtitle: "Effective, data-driven strategies to accelerate your online success.",
    description: `Our expert digital marketers craft tailored strategies to drive measurable growth, improve conversions, and enhance your online presence. From SEO to paid ads and conversion optimization, we make your digital efforts deliver tangible results.`,
    features: [
      "Search Engine Optimization (SEO)",
      "Paid ads on Google, Meta, TikTok, LinkedIn",
      "Email marketing automation & funnel creation",
      "Conversion Rate Optimization (CRO)",
      "Comprehensive analytics & detailed performance reporting",
    ],
    faq: [
      {
        question: "How do you track campaign effectiveness?",
        answer: "We utilize advanced analytics tools to measure performance, ensuring every strategy is data-informed and optimized for ROI.",
      }
    ],
    cta: "Ready to accelerate your growth online? Let’s strategize your success together.",
    images: [
      '/assets/img/marketing_slider_1.jpg',
      '/assets/img/marketing_slider_2.jpg'
    ]
  },
  {
  slug: "ai-automation-solutions",
  title: "AI & Automation Solutions",
  subtitle: "Work smarter, not harder — automate workflows and harness AI for next-gen efficiency.",
  description: `We help businesses integrate AI and automation to eliminate repetitive tasks, optimize decision-making, and enhance customer experiences. Whether it's a custom GPT-powered chatbot, intelligent workflows using n8n, or AI models tailored to your business, we craft smart solutions that drive productivity and innovation.`,
  features: [
    "AI integration (GPT, Gemini, Claude, etc.) for custom workflows",
    "Automation with tools like n8n, Make, Zapier & custom APIs",
    "Chatbots for websites, customer support & lead generation",
    "AI-powered content generation & personalization",
    "Data analysis, predictive modeling, and intelligent insights",
    "Process optimization for SaaS platforms, eCommerce & operations"
  ],
  faq: [
    {
      question: "Can you integrate AI into our existing systems?",
      answer: "Yes. We can seamlessly integrate AI models and automation into your existing tech stack, improving efficiency without disrupting your current operations."
    },
    {
      question: "Do you build custom automation workflows?",
      answer: "Absolutely. We specialize in building tailored workflows with n8n, Zapier, and other tools based on your business needs and goals."
    },
    {
      question: "Is AI suitable for small businesses or only large companies?",
      answer: "AI can benefit businesses of all sizes. We design scalable, cost-effective AI and automation solutions specifically suited for startups and growing companies."
    }
  ],
  cta: "Want to put AI to work for your business? Let’s build your smart, automated future together.",
  images: [
    '/assets/img/ai_slider_1.jpg',
    '/assets/img/ai_slider_2.jpg'
  ]
},
  {
    slug: "strategy-consulting",
    title: "Consulting & Strategy",
    subtitle: "Strategic guidance to help your business launch, scale, and thrive.",
    description: `We offer expert consulting services to guide startups and growing businesses toward clear product strategies, optimized tech stacks, effective go-to-market planning, and strategic advisory. Leverage our experience to ensure your success.`,
    features: [
      "Product strategy & roadmap planning",
      "Tech stack selection & infrastructure advice",
      "Go-to-Market (GTM) strategic consulting",
      "Startup advisory and mentorship",
    ],
    faq: [
      {
        question: "Do you advise early-stage startups?",
        answer: "Yes, we provide strategic advice specially tailored for startups, guiding you through critical early decisions and positioning you for sustainable growth.",
      }
    ],
    cta: "Looking for strategic clarity and guidance? Let’s navigate your growth together.",
    images: [
      '/assets/img/consulting_slider_1.jpg',
      '/assets/img/consulting_slider_2.jpg'
    ]
  }
];

export default serviceDetails;
