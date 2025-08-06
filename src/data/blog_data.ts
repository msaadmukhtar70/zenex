
import blog_img_1 from "@/assets/img/post_1.jpg";
import blog_img_2 from "@/assets/img/post_2.jpg";
import blog_img_3 from "@/assets/img/post_3.jpg"; 
import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
}


const blog_data: DataType[] = [
  {
    id: 1,
    img: blog_img_1,
    title: "Why Every Business Needs a Digital Agency in 2025",
    des: "Discover how partnering with the right digital agency can boost your brand visibility, streamline your operations, and unlock real growth."
  },
  {
    id: 2,
    img: blog_img_2,
    title: "What Does a Creative Agency Actually Do?",
    des: "Not sure what creative agencies offer? Here's a breakdown of how they help with design, branding, product launches, and digital growth."
  },
  {
    id: 3,
    img: blog_img_3,
    title: "Maximize Your Marketing Budget: What Works & What Doesn’t",
    des: "Learn how to stretch your marketing dollars with strategies that actually convert — from paid ads to content and CRO."
  },
  {
    id: 4,
    img: blog_img_1,
    title: "MVP Development for Startups: What You Need to Know",
    des: "A startup guide to building a Minimum Viable Product the right way — with speed, focus, and a scalable tech stack."
  },
  {
    id: 5,
    img: blog_img_2,
    title: "The Real ROI of Great UX Design",
    des: "Bad UX costs more than you think. Here’s how user-first design increases engagement, loyalty, and conversions."
  },
  {
    id: 6,
    img: blog_img_3,
    title: "Branding vs. Logo Design: What’s the Difference?",
    des: "Your logo isn’t your brand. We explain the key differences and why your business needs a full brand identity to grow."
  },
  {
    id: 7,
    img: blog_img_1,
    title: "Webflow, WordPress, or Custom Code: What’s Best for You?",
    des: "Confused about which platform to build your site on? This guide breaks down the pros and cons for startups and growing businesses."
  },
  {
    id: 8,
    img: blog_img_2,
    title: "AI in Web Development: Hype or Game-Changer?",
    des: "Explore how AI is changing the way we build digital products — and where it can (and can’t) help your business."
  },
  {
    id: 9,
    img: blog_img_3,
    title: "How to Choose the Right Digital Agency for Your Startup",
    des: "There are thousands of agencies — here’s how to find one that gets your vision, builds smart, and scales with you."
  },
  {
    id: 10,
    img: blog_img_1,
    title: "Boost Your Website's Performance in 30 Days",
    des: "A checklist of quick wins you can implement today to improve speed, SEO, mobile usability, and lead conversions."
  }
]


export default blog_data