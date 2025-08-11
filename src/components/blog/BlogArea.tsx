"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import blog_data from "@/data/blog_data";

const BlogArea = () => {
  // 🔓 Ensure Android (and iOS) can scroll: remove any accidental page locks
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // Save previous styles to restore on unmount
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlPos = html.style.position;
    const prevBodyPos = body.style.position;

    // Remove scroll locks commonly set by mobile menus/preloaders
    html.style.overflow = "";
    body.style.overflow = "";
    if (getComputedStyle(html).position === "fixed") html.style.position = "";
    if (getComputedStyle(body).position === "fixed") body.style.position = "";

    // Kill any full-screen invisible overlays that might be grabbing touch
    const suspects = Array.from(document.querySelectorAll<HTMLElement>([
      ".preloader",
      ".mobile-menu-overlay",
      ".menu-overlay",
      ".offcanvas-overlay",
      ".cs_overlay",
      ".site-overlay",
    ].join(",")));

    suspects.forEach((el) => {
      const isCoveringViewport =
        getComputedStyle(el).position === "fixed" &&
        (parseInt(getComputedStyle(el).zIndex || "0", 10) >= 1000 ||
          (el.offsetWidth >= window.innerWidth && el.offsetHeight >= window.innerHeight));
      if (isCoveringViewport) {
        el.style.pointerEvents = "none"; // don’t change visuals, just stop it eating touches
      }
    });

    // Safety: ensure our blog root never traps scroll
    const root = document.getElementById("blog-area-root");
    if (root) {
      root.style.overflow = "visible";
      root.style.maxHeight = "none";
    }

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      html.style.position = prevHtmlPos;
      body.style.position = prevBodyPos;
      suspects.forEach((el) => (el.style.pointerEvents = ""));
      if (root) {
        root.style.overflow = "";
        root.style.maxHeight = "";
      }
    };
  }, []);

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

      <section id="blog-area-root">
        <div className="container">
          <div className="row">
            {blog_data.map((item) => (
              <div
                key={item.id}
                className={`col-md-4 ${item.id === 2 ? "mt-0 mt-md-5" : ""} ${
                  item.id === 5 ? "mt-0 mt-md-5" : ""
                } ${item.id === 8 ? "mt-0 mt-md-5" : ""}`}
                style={{ overflow: "visible" }} // ensure cards don’t clip or trap scroll
              >
                <div className="anim_div_ShowDowns">
                  <Link href={`/blog-details/${item.slug}`} className="cs_blog cs_style_1">
                    <div>
                      {/* Ensure image doesn’t create layout shifts on mobile */}
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                    <div className="cs_blog_info">
                      <h6 className="cs_blog_title">{item.title}</h6>
                      <p className="cs_blog_subtitle">{item.des}</p>

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
                <a href="#" className="cs_hero_btn cs_round_btn btn-item">
                  <span></span> Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
