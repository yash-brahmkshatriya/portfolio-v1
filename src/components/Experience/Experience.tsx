import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../Utils/Section';

interface expType {
  frontmatter: {
    company: string;
    location: string;
    range: string;
    title: string;
  };
  html: HTMLElement;
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
  useEffect(() => setTabInFocus(activeTabId), [activeTabId]);

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
    <Section id="experience" className="min-h-screen py-10">
      <h2 className="section-heading after-h-line">My Experiences</h2>
      <div className="flex sm:box">
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
      </div>
    </Section>
  );
};

export default Experience;
