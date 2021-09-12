import React from 'react';
import config from '../../config';
import { GitHub, Linkedin, Instagram, ExternalLink, Mail } from 'react-feather';

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
  idx?: number;
  className?: string;
  targetSelf?: boolean;
}

const Icon = ({ name, className, size }: iconProps) => {
  const sz = size || 25;
  const classes = className || '';
  switch (name) {
    case 'Github':
      return <GitHub size={sz} className={classes} />;
    case 'Linkedin':
      return <Linkedin size={sz} className={classes} />;
    case 'Instagram':
      return <Instagram size={sz} className={classes} />;
    case 'Mail':
      return <Mail size={sz} className={classes} />;
    default:
      return <ExternalLink size={sz} className={classes} />;
  }
};

const SocialLi = ({ sm, idx, className, targetSelf }: socialLiProps) => {
  return (
    <li key={idx} className={`social-icon ${className}`}>
      <a
        href={sm.url}
        aria-label={sm.name}
        target={targetSelf ? '_self' : '_blank'}
        rel="noreferrer"
      >
        <Icon name={sm.name} />
      </a>
    </li>
  );
};

const Socials = () => {
  return (
    <ul className="bottom-0 flex flex-row items-center justify-around lg:flex-col lg:justify-end sidebar">
      {config.socialMedia &&
        config.socialMedia.map((sm, idx) => <SocialLi sm={sm} idx={idx} />)}
      <SocialLi
        sm={{ name: 'Mail', url: `mailto:${config.email}` }}
        targetSelf
        className="lg:hidden"
      />
    </ul>
  );
};

export default Socials;
