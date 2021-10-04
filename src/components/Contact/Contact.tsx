import React from 'react';
import Section from '../Utils/Section';
import config from '../../config';

const Contact = () => {
  return (
    <Section
      id="contact"
      className="max-w-lg min-h-screen py-20 mx-auto text-center"
    >
      <h2 className="mt-2 mb-5 text-center text-secondary md:text-4xl lg:text-5xl font-display whitespace-nowrap">
        Get in Touch
      </h2>
      <p className="py-2 mb-10">
        Whether it's a job opportunity, a wish to work together, an invite to
        coffee, or feedback on my portfolio, my inbox is open !
      </p>
      <a
        href={`mailto:${config.email}`}
        className="py-3 no-underline rounded cursor-pointer border-1 text-secondary px-7 border-secondary hover:bg-secondary-slate2"
        rel="noopener"
      >
        Say Hi
      </a>
    </Section>
  );
};

export default Contact;
