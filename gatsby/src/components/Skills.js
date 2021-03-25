import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import { FaReact } from '@react-icons/all-files/fa/FaReact';
import { IoLogoJavascript } from '@react-icons/all-files/io5/IoLogoJavascript';
import { GrGatsbyjs } from '@react-icons/all-files/gr/GrGatsbyjs';
import { SiGraphql } from '@react-icons/all-files/si/SiGraphql';
import { SiSass } from '@react-icons/all-files/si/SiSass';
import { BiBookContent } from '@react-icons/all-files/bi/BiBookContent';

const StyledSkill = styled.div`
  font-size: 2rem;
  display: grid;
  grid-template-columns: 80px 1fr 1fr;
  padding: 1rem;
  grid-template-rows: 2fr 1fr;
  align-items: center;
  cursor: default;

  @media (max-width: 525px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 2fr 1fr 1fr;
  }

  .icon {
    font-size: 6rem;
    max-width: 100px;
    grid-row: span 2;
  }
  .title {
    padding-left: 5px;
    font-weight: 600;
    align-content: flex-end;
  }
  .years {
    padding-left: 15px;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--light-gray);
    white-space: nowrap;
    flex-wrap: nowrap;
  }

  .percent {
    text-align: right;
  }
  .bar {
    max-width: ${(props) => props.maxWidth}%;
    border-radius: 15px;
    box-shadow: 0px 10px 20px 2px var(--light-gray);
    background: linear-gradient(
      90deg,
      rgba(249, 16, 225, 0.8) 40%,
      rgba(49, 115, 180, 0.8) 100%
    );
    grid-column: span 2;
    text-align: center;
    align-content: center;
  }
`;

const StyledSkillsSection = styled(StyledSection)`
  #skills {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  }
`;

const Skill = ({ title, icon, percent, years, iconColor }) => {
  const Icon = icon;
  return (
    <StyledSkill maxWidth={percent}>
      <Icon className="icon" color={iconColor} />
      <span className="title">
        {title}
        <span className="years">{years} YEARS</span>
      </span>
      <span className="bar">{percent}%</span>
    </StyledSkill>
  );
};

export default function Skills() {
  return (
    <StyledSkillsSection>
      <h2 className="section-heading">Skills</h2>
      <div id="skills">
        <Skill
          icon={FaReact}
          iconColor="#2ed1f7"
          title="ReactJS"
          years={3}
          percent={90}
        />
        <Skill
          icon={GrGatsbyjs}
          iconColor="#452475"
          title="GatsbyJS"
          years={1}
          percent={85}
        />
        <Skill
          icon={IoLogoJavascript}
          iconColor="#f0db4e"
          title="JavaScript ES6"
          years={3}
          percent={90}
        />
        <Skill
          icon={SiGraphql}
          iconColor="#e535ab"
          title="GraphQL"
          years={1}
          percent={60}
        />
        <Skill
          icon={SiSass}
          iconColor="#c69"
          title="Sass / CSS"
          years={3}
          percent={90}
        />
        <Skill
          icon={BiBookContent}
          iconColor="#f03e2f"
          title="Sanity CMS"
          years={1}
          percent={60}
        />
      </div>
    </StyledSkillsSection>
  );
}
