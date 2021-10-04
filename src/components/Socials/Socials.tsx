import React from 'react';
import config from '../../config';
import { GitHub, Linkedin, Instagram, ExternalLink } from 'react-feather';

interface iconProps {
  name?: string;
  className?: string;
  size?: number;
}

interface socialLiProps {
  sm?: {
    name: string;
    url: string;
  };
  idx?: number | string;
  className?: string;
  targetSelf?: boolean;
}

const Icon = ({ name, className, size }: iconProps) => {
  const sz = size || 20;
  const classes = className || '';
  switch (name) {
    case 'Github':
      return <GitHub size={sz} className={classes} />;
    case 'Linkedin':
      return <Linkedin size={sz} className={classes} />;
    case 'Instagram':
      return <Instagram size={sz} className={classes} />;
    default:
      return <ExternalLink size={sz} className={classes} />;
  }
};

const SocialLi = ({ sm, idx, className, targetSelf }: socialLiProps) => {
  const extraClasses = className || '';
  return (
    <li key={idx} className={`social-icons ${extraClasses}`}>
      <a
        href={sm.url}
        aria-label={sm.name}
        target={targetSelf ? '_self' : '_blank'}
        rel="noreferrer"
        className="social-icon"
      >
        <Icon name={sm.name} />
      </a>
    </li>
  );
};

const Socials = () => {
  return (
    <ul className="bottom-0 flex flex-row items-center justify-center lg:flex-col lg:justify-end sidebar">
      {config.socialMedia &&
        config.socialMedia.map((sm, idx) => <SocialLi sm={sm} idx={idx} />)}
    </ul>
  );
};

export default Socials;
