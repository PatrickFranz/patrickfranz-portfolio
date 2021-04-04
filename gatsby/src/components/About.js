import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import SectionContainer from './SectionContainer';

const StyledAboutSection = styled(StyledSection)``;

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
          These days I'm incrediably passionate about React, Gatsby and the
          JAMStack and how that technology is improving everyones experience on
          the web.
        </p>
      </StyledAboutSection>
    </SectionContainer>
  );
}
