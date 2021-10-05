import React from 'react';
import Typewriter, { Options } from 'typewriter-effect';
import { Link } from 'gatsby';
import { ArrowRight } from 'react-feather';

const Salutation = () => {
  const typeWriterOptions: Partial<Options> = {
    loop: true,
    autoStart: true,
    strings: ['Web Developer', 'Competitive Coder'],
    cursor: '_',
  };
  return (
    <div className="w-full font-heading">
      <div className="" aria-label="Hey, I'm Yash Web Developer">
        <h1 className="mb-3 intro-name">
          Hello, I'm{' '}
          <span className="font-bold text-primary">Yash Brahmkshatriya</span>
        </h1>
        <h1 className="mb-1 typewriter">
          I'm <Typewriter options={typeWriterOptions} />
        </h1>
      </div>

      <div className="mt-10">
        <Link to="/#about">
          <button
            className="text-sm md:text-base lg:text-lg btn btn-secondary-outline group"
            type="button"
          >
            Know More
            <ArrowRight className="inline-block ml-3 text-xl transition duration-150 transform group-hover:rotate-90" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Salutation;
