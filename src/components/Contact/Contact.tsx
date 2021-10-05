import React from 'react';
import Section from '../Utils/Section';
import config from '../../config';
import { Mail } from 'react-feather';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <Section
      id="contact"
      className="max-w-lg py-20 mx-auto text-center"
      style={{ minHeight: '480px' }}
    >
      <Fade bottom>
        <h2 className="mt-2 mb-5 text-3xl text-center text-secondary md:text-4xl lg:text-5xl font-display whitespace-nowrap">
          Get in Touch
        </h2>
        <p className="py-2 mb-10 text-sm sm:text-base">
          Whether it's a job opportunity, a wish to work together, an invite to
          coffee, or feedback on my portfolio, my inbox is open !
        </p>
        <a
          href={`mailto:${config.email}`}
          className="inline-flex items-center btn btn-secondary-outline"
          rel="noopener"
        >
          <Mail className="mr-2 text-secondary" size={17} />
          Say Hi
        </a>
      </Fade>
    </Section>
  );
};

export default Contact;
