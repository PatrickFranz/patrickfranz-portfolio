import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import SectionContainer from './SectionContainer';

const StyledFooter = styled.footer`
  p {
    text-align: center;
  }
  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export default function Footer() {
  return (
    <SectionContainer bgColor="var(--black)">
      <StyledSection>
        <StyledFooter>
          <p>&copy;{new Date().getFullYear()} Patrick Franz</p>
        </StyledFooter>
      </StyledSection>
    </SectionContainer>
  );
}
