import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import SectionContainer from './SectionContainer';

const StyledFooter = styled.footer`
  p {
    text-align: center;
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
