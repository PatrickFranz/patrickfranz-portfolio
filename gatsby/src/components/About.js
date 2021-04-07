import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import SectionContainer from './SectionContainer';

const StyledAboutSection = styled(StyledSection)`
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export default function About() {
  return (
    <SectionContainer bgColor="rgba(9, 132, 227,0.9)">
      <StyledAboutSection id="about">
        <h2 className="section-heading">About</h2>
        <p>
          My name is Patrick and I am a web developer. If I’m not at my home in
          San Diego you’ll find me on my sailboat somewhere in the world. I’ve
          been involved in technology and programming for 20+ years in various
          roles. I've been focused on software and web developementfor the past
          5 years.
        </p>
        <p>
          Focused on building beautiful and functional websites using React (
          GatsbyJS
          <span role="img" aria-label="Gatsby Love">
            😻
          </span>
          ), styling components using Styled Components and SASS, and
          occasionally using Frameworks just as Bootstrap or Material Design.
        </p>
        {/* TODO: Add More|Less button here */}

        <p>
          These days you're going to find me digging deep into modern web
          databases such as MongoDB and PostgresSQL, and backend frameworks like
          NodeJS and Express Server to round out my ability to operate as a
          full-stack developer.
        </p>
      </StyledAboutSection>
    </SectionContainer>
  );
}
