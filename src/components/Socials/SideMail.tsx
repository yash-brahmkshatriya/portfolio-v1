import React from 'react';
import Animation from '../Animation/Animation';
import { MarkDownQueryData, SocialData } from '../../types';
import { useStaticSocialData } from '../../staticQueries/useStaticSocialData';

const SideMail = () => {
  const socialsData: MarkDownQueryData<SocialData> = useStaticSocialData();

  const email =
    socialsData.allMarkdownRemark.nodes[0]?.frontmatter.email ?? 'N/A';
  return (
    <div className="fixed bottom-0 right-0 z-10 hidden w-20 lg:block">
      <Animation.Bounce direction="bottom" delay={1.5}>
        <p className="sidebar font-heading">
          <a
            href={`mailto:${email}`}
            target="_self"
            aria-label="Mail"
            rel="noreferrer"
            style={{ writingMode: 'vertical-rl' }}
            className="text-sm tracking-widest transform -translate-x-2 social-icon lg:mb-4"
          >
            {email}
          </a>
        </p>
      </Animation.Bounce>
    </div>
  );
};

export default SideMail;
