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
            asset {
              gatsbyImageData(width: 600)
            }
          }
          techStack {
            id
            vendor_url
            logoimage {
              asset {
                gatsbyImageData(width: 50)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <SectionContainer bgColor="rgba(85, 239, 196,0.9)">
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
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    grid-template-rows: repeat(auto-fit, minmax(300px, 300px));
  }
`;
