import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Photo = () => {
  return (
    <div className="relative w-3/5 max-w-xs mx-auto mt-12 mb-0 md:m-0 md:w-100 md:ml-12">
      <div className="relative block w-full transition duration-150 ease-linear rounded-full bg-secondary-slate hover:bg-transparent focus:bg-transparent">
        <StaticImage
          src="../../images/dp.jpg"
          alt="It's My Picture"
          placeholder="blurred"
          imgClassName="relative rounded-full filter grayscale transition ease-linear duration-150 contrast-100 hover:filter-none mix-blend-multiply hover:mix-blend-normal"
          quality={100}
          width={400}
        />
      </div>
    </div>
  );
};

export default Photo;
