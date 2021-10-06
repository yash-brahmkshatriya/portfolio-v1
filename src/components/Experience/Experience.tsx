import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../Utils/Section';
import Fade from 'react-reveal/Fade';

interface expType {
  frontmatter: {
    company: string;
    location: string;
    range: string;
    title: string;
  };
  html: string;
}

const Experience = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/experience/" } }
      ) {
        nodes {
          frontmatter {
            company
            location
            range
            title
          }
          html
        }
      }
    }
  `);
  const expData: Array<expType> = data.allMarkdownRemark.nodes;
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabInFocus, setTabInFocus] = useState(null);
  const tabs = useRef([]);

  const focusTab = () => {
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
  };

  useEffect(focusTab, [tabInFocus]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setTabInFocus(tabInFocus + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setTabInFocus(tabInFocus - 1);
    }
  };

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
            {expData &&
              expData.map((exp, i) => (
                <button
                  className={`tab-button hover:tab-button-glow focus:tab-button-glow ${
                    activeTabId === i ? 'text-secondary border-secondary' : ''
                  }`}
                  key={i}
                  id={`tab-${i}`}
                  ref={(el) => (tabs.current[i] = el)}
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
            {expData &&
              expData.map((exp, i) => {
                const { title, company, range } = exp.frontmatter;
                const htmlExp = exp.html;
                const isActive: boolean = activeTabId === i;
                return (
                  <div
                    className="tab-panel"
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={isActive ? 0 : -1}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={!isActive}
                    hidden={!isActive}
                  >
                    <h3 className="mb-1 text-lg font-medium leading-5 md:text-xl">
                      <span>{title}</span>{' '}
                      <span className="text-secondary">@ {company}</span>
                    </h3>
                    <p className="mb-6 font-mono text-xs text-gray-400">
                      {range}
                    </p>

                    <div
                      className="jorr-list"
                      dangerouslySetInnerHTML={{ __html: htmlExp }}
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
