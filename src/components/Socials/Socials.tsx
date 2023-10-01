import { useStaticQuery } from 'gatsby';
import React from 'react';
import { GitHub, Linkedin, Instagram, ExternalLink } from 'react-feather';
import { MarkDownQueryData, SocialMediaItem, SocialData } from '../../types';
import { useStaticSocialData } from '../../staticQueries/useStaticSocialData';

interface IconProps {
  name?: string;
  className?: string;
  size?: number;
}

type SocialListItemProps = SocialMediaItem & {
  idx?: number | string;
  className?: string;
  targetSelf?: boolean;
};

const Icon = ({ name, className, size }: IconProps) => {
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

const SocialLi = ({
  name,
  url,
  idx,
  className,
  targetSelf,
}: SocialListItemProps) => {
  const extraClasses = className || '';
  return (
    <li key={idx} className={`social-icons ${extraClasses}`}>
      <a
        href={url}
        aria-label={name}
        target={targetSelf ? '_self' : '_blank'}
        rel="noreferrer"
        className="social-icon"
      >
        <Icon name={name} />
      </a>
    </li>
  );
};

const Socials = () => {
  const socialMDData: MarkDownQueryData<SocialData> = useStaticSocialData();
  const socialData: SocialData | null =
    socialMDData.allMarkdownRemark.nodes[0]?.frontmatter ?? null;
  return (
    <ul className="bottom-0 flex flex-row items-center justify-center lg:flex-col lg:justify-end sidebar">
      {socialData &&
        socialData.socials.map((sm, idx) => (
          <SocialLi key={`socials-${idx}`} {...sm} idx={idx} />
        ))}
    </ul>
  );
};

export default Socials;
