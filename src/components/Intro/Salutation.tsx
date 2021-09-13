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
      <div
        className="text-3xl text-white cursor-default sm:text-5xl"
        aria-label="Hey, I'm Yash Web Developer"
      >
        <h1 className="mb-3">
          Hello, I'm{' '}
          <span className="font-bold text-primary">Yash Brahmkshatriya</span>
        </h1>
        <h1 className="mb-1 text-2xl text-white sm:text-4xl">
          <Typewriter options={typeWriterOptions} />
        </h1>
      </div>
      <div className="mt-10">
        <Link to="/#about">
          <button
            className="px-5 py-1 text-2xl transition duration-200 ease-in border-white group border-1 hover:border-secondary hover:bg-secondary focus:border-secondary focus:bg-secondary"
            type="button"
          >
            Know More
            <ArrowRight className="inline-block ml-3 text-xl text-white transition duration-200 transform group-hover:rotate-90" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Salutation;
