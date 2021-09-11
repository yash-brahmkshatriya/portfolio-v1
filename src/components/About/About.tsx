import React from 'react';
import AboutParagraph from './AboutParagraph';

const About: React.FC = () => {
  return (
    <div className="flex items-center justify-center text-center md:container md:mx-auto">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl lg:text-5xl font-display text-primary">
          About Me
        </h1>
        <div className="flex flex-col-reverse items-center justify-between gap-20 md:flex-row">
          <AboutParagraph />
        </div>
      </div>
    </div>
  );
};

export default About;
