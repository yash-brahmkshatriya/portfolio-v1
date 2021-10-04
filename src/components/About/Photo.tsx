import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Photo = () => {
  return (
    <div className="relative w-2/3 max-w-xs mx-auto mt-12 mb-0 md:m-0 md:w-100">
      <div className="relative block w-full transition duration-150 ease-linear rounded-md bg-secondary-slate hover:bg-transparent focus:bg-transparent">
        <StaticImage
          src="../../images/dp_1.png"
          alt="It's My Picture"
          placeholder="blurred"
          imgClassName="relative rounded filter grayscale transition ease-linear duration-100 contrast-150 hover:filter-none mix-blend-multiply hover:mix-blend-normal"
          quality={95}
          width={500}
        />
      </div>
    </div>
  );
};

export default Photo;
