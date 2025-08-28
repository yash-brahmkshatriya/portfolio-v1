import React, {
  KeyboardEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import Fade from 'react-reveal/Fade';
import Section from '../Utils/Section';
import { useSkipInitialLayoutEffect } from '../../hooks/useSkipInitialEffects';
import { MarkDownQueryData } from '../../types';
import { ExperienceData } from './types';
import { useStaticExperienceData } from '../../staticQueries/useStaticExperienceData';

const Experience = () => {
  const data: MarkDownQueryData<ExperienceData> = useStaticExperienceData();
  const activeExperienceData = useMemo(() => {
    return data.allMarkdownRemark.nodes.filter((exp) => exp.frontmatter.active);
  }, [data.allMarkdownRemark.nodes]);

  const [activeTabId, setActiveTabId] = useState<number>(0);
  const [tabInFocus, setTabInFocus] = useState<number>(0);
  const tabs = useRef<HTMLButtonElement[]>([]);

  const focusTab = useCallback(() => {
    if (tabs.current[tabInFocus]) {
      tabs.current[tabInFocus].focus();
      return;
    }
    if (tabInFocus >= tabs.current.length) {
      setTabInFocus(0);
    }
    if (tabInFocus < 0) {
      setTabInFocus(tabs.current.length - 1);
    }
  }, [tabInFocus]);

  useSkipInitialLayoutEffect(focusTab, [tabInFocus]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setTabInFocus((prev) => prev + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setTabInFocus((prev) => prev - 1);
      }
    },
    [tabInFocus]
  );

  return (
    <Section id="experience" className="max-w-3xl min-h-screen py-20 mx-auto">
      <Fade bottom>
        <h2 className="section-heading after-h-line">My Experiences</h2>
        <div className="block sm:flex">
          <div
            className="tab-list"
            role="tablist"
            aria-label="Experience Tabs"
            onKeyDown={onKeyDown}
          >
            {activeExperienceData.map((exp, i) => (
              <button
                className={`tab-button hover:tab-button-glow focus:tab-button-glow ${
                  activeTabId === i ? 'text-secondary border-secondary' : ''
                }`}
                key={`experience-tab-${i}`}
                id={`tab-${i}`}
                ref={(el) => {
                  if (el !== null) {
                    tabs.current[i] = el;
                  }
                }}
                onClick={() => setActiveTabId(i)}
                role="tab"
                tabIndex={activeTabId === i ? 0 : -1}
                aria-controls={`panel=${i}`}
                aria-selected={activeTabId === i}
              >
                {exp.frontmatter.company}
              </button>
            ))}
          </div>
          <div className="tab-panels">
            {activeExperienceData.map((exp, i) => {
              const { title, company, range } = exp.frontmatter;
              const htmlExp = exp.html;
              const isActive: boolean = activeTabId === i;
              return (
                <div
                  className="tab-panel"
                  key={`experience-${i}`}
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={isActive ? 0 : -1}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={!isActive}
                  hidden={!isActive}
                >
                  <h3 className="mb-0 text-lg font-medium md:text-xl">
                    {title}
                  </h3>
                  <h4 className="mb-2 text-sm font-medium text-secondary md:text-base">
                    {company}
                  </h4>

                  <p className="mb-6 font-mono text-xs text-gray-400">
                    {range}
                  </p>

                  <div
                    className="jorr-list"
                    dangerouslySetInnerHTML={{ __html: htmlExp ?? '' }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </Section>
  );
};

export default Experience;
