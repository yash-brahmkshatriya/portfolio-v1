import React from 'react';
import Typewriter, { Options } from 'typewriter-effect';

const Salutation: React.FC = () => {
  const typeWriterOptions: Partial<Options> = {
    loop: true,
    autoStart: true,
    strings: ['Web Developer', 'Competitive Coder'],
    cursor: '_',
  };
  return (
    <div className="w-full">
      <div
        className="text-3xl text-white cursor-default font-display sm:text-5xl"
        aria-label="Hey, I'm Yash Web Developer"
      >
        <h1 className="mb-3">
          Hello, I'm <span className="text-primary">Yash Brahmkshatriya</span>
        </h1>
        <h1 className="mb-1 text-2xl text-white font-heading sm:text-4xl">
          <Typewriter options={typeWriterOptions} />
        </h1>
      </div>
      <div className="mt-8">
        <button
          className="px-5 py-1 text-base transition duration-100 ease-in border-1 border-white font-mytext hover:border-secondary hover:bg-secondary"
          type="button"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default Salutation;
