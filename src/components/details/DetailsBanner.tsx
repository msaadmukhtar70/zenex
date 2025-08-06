import React from 'react';
import Image from 'next/image';

interface DetailsBannerProps {
  images: string[]; // array of image paths
}

const DetailsBanner = ({ images }: DetailsBannerProps) => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <div className="container">
        <div className="d-flex gap-2 gap-md-5 flex-wrap">
          {images.map((imgSrc, index) => (
            <div key={index}>
              <Image src={imgSrc} alt={`service-banner-${index + 1}`} width={500} height={300} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailsBanner;
