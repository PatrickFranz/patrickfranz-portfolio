import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import ProjectCard from './ProjectCard';
import SectionContainer from './SectionContainer';

export default function Portfolio() {
  const { projects } = useStaticQuery(graphql`
    query MyQuery {
      projects: allSanityPortfolio {
        nodes {
          id
          title
          url
          yearBuilt
          slug {
            current
          }
          projectImage {
            ...ImageWithPreview
          }
          techStack {
            id
            vendor_url
            logoimage {
              ...ImageWithPreview
            }
          }
        }
      }
    }
  `);

  return (
    <SectionContainer bgColor="rgba(249, 127, 81,1.0)">
      <StyledPortfolioSection id="portfolio">
        <h2 className="section-heading">Portfolio</h2>
        <div className="portfolio-grid">
          {projects.nodes
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
            .sort(
              (a, b) => b.props.project.yearBuilt - a.props.project.yearBuilt
            )}
        </div>
      </StyledPortfolioSection>
    </SectionContainer>
  );
}

const StyledPortfolioSection = styled(StyledSection)`
  .portfolio-grid {
    display: grid;
    justify-content: space-around;
    column-gap: 2rem;
    row-gap: 8rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    grid-template-rows: repeat(auto-fit, minmax(300px, 300px));
  }
`;
