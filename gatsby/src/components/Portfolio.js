import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import SectionContainer from './SectionContainer';

const StyledPortfolioSection = styled(StyledSection)`
  .portfolio-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    grid-template-rows: repeat(auto-fit, minmax(300px, 300px));
  }
`;

const StyledCard = styled.div`
  background: var(--bright-white);
  position: relative;
  width: 100%;
  transition: all 500ms;
  justify-content: space-between;
  border-radius: 5px;
  display: grid;
  grid-template-areas:
    'year  img'
    'title img'
    '  .   img';

  &:hover {
    transform: scale(1.01);
    filter: drop-shadow(0 5px 3px rgba(27, 27, 27, 0.8));
  }

  .year {
    grid-area: year;
    padding: 2rem;
  }
  .title {
    grid-area: title;
    position: absolute;
    top: 40%;
    background: black;
    color: white;
    min-width: 200px;
    overflow: hidden;
    padding: 2rem;
    font-size: 3rem;
    font-weight: 100;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    filter: drop-shadow(0 0 5px rgba(27, 27, 27, 0.8));

    &:after {
      content: '';
      position: absolute;
      height: 2px;
      width: 50%;
      bottom: 1rem;
      left: 2rem;
      border-radius: 10px;
      background: var(--white);
    }
  }
  .project-image {
    grid-area: img;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export default function Portfolio() {
  return (
    <SectionContainer bgColor="rgba(85, 239, 196,0.7)">
      <StyledPortfolioSection>
        <h2 className="section-heading">Portfolio</h2>
        <div className="portfolio-grid">
          <StyledCard>
            <p className="year">2021</p>
            <h1 className="title">Bluewater Canvas Works</h1>
            <img
              className="project-image"
              src="https://placekitten.com/150/300"
              alt="Cute cat"
            />
          </StyledCard>
          <StyledCard>
            <p className="year">2021</p>
            <h1 className="title">Patrick's Portfolio</h1>
            <img
              className="project-image"
              src="https://placekitten.com/g/150/300"
              alt="Cute cat"
            />
          </StyledCard>
          <StyledCard>
            <p className="year">2021</p>
            <h1 className="title">Patrick's Portfolio</h1>
            <img
              className="project-image"
              src="https://placekitten.com/150/300"
              alt="Cute cat"
            />
          </StyledCard>
          <StyledCard>
            <p className="year">2021</p>
            <h1 className="title">Patrick's Portfolio</h1>
            <img
              className="project-image"
              src="https://placekitten.com/g/150/300"
              alt="Cute cat"
            />
          </StyledCard>
          <StyledCard>
            <p className="year">2021</p>
            <h1 className="title">Patrick's Portfolio</h1>
            <img
              className="project-image"
              src="https://placekitten.com/150/300"
              alt="Cute cat"
            />
          </StyledCard>
        </div>
      </StyledPortfolioSection>
    </SectionContainer>
  );
}
