import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';

const StyledAboutSection = styled(StyledSection)``;

export default function About() {
  return (
    <StyledAboutSection>
      <h2 className="section-heading">About</h2>
      <p>
        My name is Patrick and I am a web developer. If I’m not at my home in
        San Diego you’ll find me on my sailboat somewhere in the world. I’ve
        been involved in technology and programming for 20+ years in various
        roles, most recently web development.
      </p>
      <p>
        I’m passionate about how technology can improve our lives and business
        by making our customers lives easier and more beautiful.
      </p>
    </StyledAboutSection>
  );
}
