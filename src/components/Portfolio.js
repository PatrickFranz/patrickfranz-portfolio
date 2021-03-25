import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import SectionContainer from './SectionContainer';

const StyledPortfolioSection = styled(StyledSection)`
  .portfolio-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const StyledCard = styled.div`
  background: var(--bright-white);
`;

export default function Portfolio() {
  return (
    <SectionContainer>
      <StyledPortfolioSection>
        <h2 className="section-heading">Portfolio</h2>
        <div className="portfolio-grid">
          <StyledCard>
            <h1 className="title">Title</h1>
          </StyledCard>
          <StyledCard>
            <h1 className="title">Title</h1>
          </StyledCard>
          <StyledCard>
            <h1 className="title">Title</h1>
          </StyledCard>
          <StyledCard>
            <h1 className="title">Title</h1>
          </StyledCard>
        </div>
      </StyledPortfolioSection>
    </SectionContainer>
  );
}
