import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';

const StyledPortfolioSection = styled(StyledSection)``;

export default function Portfolio() {
  return (
    <StyledPortfolioSection>
      <h2 className="section-heading">Portfolio</h2>
    </StyledPortfolioSection>
  );
}
