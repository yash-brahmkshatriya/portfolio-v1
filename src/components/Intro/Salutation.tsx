import React from 'react';
import Typewriter, { Options } from 'typewriter-effect';
import { Link } from 'gatsby';
import { ArrowRight } from 'react-feather';

const typeWriterOptions: Partial<Options> = {
  loop: true,
  autoStart: true,
  strings: ['Hello', 'Hola', 'Namaste', 'Bonjour', 'Konnichiwa', 'Hallo'],
  cursor: '',
};

const Salutation = () => {
  return (
    <div className="w-full font-heading">
      <div className="" aria-label="Hey, I'm Yash, Web Developer">
        <h1 className="mb-4 intro-name">
          <div className="inline-block">
            <Typewriter options={typeWriterOptions} />
          </div>
          , I'm{' '}
          <span className="font-bold text-primary">Yash Brahmkshatriya</span>
        </h1>
        <h2 className="mb-1 intro-description">
          I code amazing things, and I love what I do.
        </h2>
      </div>

      <div className="mt-10">
        <Link
          to="/#about"
          className="text-sm md:text-base lg:text-lg btn btn-secondary-outline group"
        >
          Know More
          <ArrowRight className="inline-block ml-3 text-xl transition duration-150 transform group-hover:rotate-90" />
        </Link>
      </div>
    </div>
  );
};

export default Salutation;
