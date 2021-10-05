import React from 'react';
import config from '../../config';
import Bounce from 'react-reveal/Bounce';

const SideMail = () => {
  return (
    <div className="fixed bottom-0 right-0 z-10 hidden w-20 lg:block">
      <Bounce bottom delay={1500}>
        <p className="sidebar font-heading">
          <a
            href={`mailto:${config.email}`}
            target="_self"
            aria-label="Mail"
            rel="noreferrer"
            style={{ writingMode: 'vertical-rl' }}
            className="text-sm tracking-widest transform -translate-x-2 social-icon lg:mb-4"
          >
            {config.email}
          </a>
        </p>
      </Bounce>
    </div>
  );
};

export default SideMail;
