import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blog_data from '@/data/blog_data'; // Import from data file

const BlogArea = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_heading_title">
                  New Day <br /> New Inspiration
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="row">
            {blog_data.map((item, i) => (
              <div key={item.id} className={`col-md-4 ${item.id === 2 ? 'mt-0 mt-md-5' : ''} ${item.id === 5 ? 'mt-0 mt-md-5' : ''} ${item.id === 8 ? 'mt-0 mt-md-5' : ''}`}>
                <div className="anim_div_ShowDowns">
                  {/* Updated link to use dynamic slug */}
                  <Link href={`/blog-details/${item.slug}`} className="cs_blog cs_style_1">
                    <div>
                      <Image src={item.img} alt={item.title} />
                    </div>
                    <div className="cs_blog_info">
                      <h6 className="cs_blog_title">
                        {item.title}
                      </h6>
                      <p className="cs_blog_subtitle">
                        {item.des}
                      </p>
                      {/* Optional: Add date and author */}
                      {(item.date || item.author) && (
                        <div className="cs_blog_meta">
                          {item.date && <span className="cs_blog_date">{item.date}</span>}
                          {item.author && <span className="cs_blog_author"> By {item.author}</span>}
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div>
            <div className="cs_hero_btn_wrap text-center">
              <div className="cs_round_btn_wrap">
                <a href="#" className="cs_hero_btn cs_round_btn btn-item"><span></span> Load More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;