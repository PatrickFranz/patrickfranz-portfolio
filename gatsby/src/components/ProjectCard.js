import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-plugin-sanity-image';
import { StyledButton } from '../styles/GlobalStyles';

export default function ProjectCard({ project }) {
  return (
    <StyledCard>
      <p className="year">{project.yearBuilt}</p>
      <h1 className="title">{project.title}</h1>
      <div className="tech">
        {project.techStack.map((tech) => (
          <Image
            {...tech.logoimage}
            alt="Vendor Logo"
            className="tech-logo"
            key={tech.id}
            width={50}
          />
        ))}
      </div>
      <Image
        {...project.projectImage}
        className="project-image"
        alt={`${project.title} screenshot`}
      />
      <div className="drop-menu">
        {/* <Link to={`project/${project.slug.current}`}>
          <StyledButton className="button">More Info</StyledButton>
        </Link> */}
        <a href={project.url} target="_blank" rel="noreferrer">
          <StyledButton className="button">View</StyledButton>
        </a>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background: var(--bright-white);
  position: relative;
  width: 100%;
  height: 300px;
  transition: all 500ms;
  justify-content: space-between;
  border-radius: 5px;
  display: grid;
  grid-template-areas:
    'year  img'
    'title img'
    'title img'
    'tech  img'
    'dropMenu dropMenu';

  &:hover {
    border-radius: 5px 5px 0 0;

    .drop-menu {
      transform: translateY(5px);
      opacity: 1;
    }
  }

  .year {
    grid-area: year;
    padding: 5px 2rem;
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
  .title {
    grid-area: title;
    position: absolute;
    background: var(--card-title-background);
    color: white;
    z-index: 1;
    min-width: 200px;
    overflow: hidden;
    padding: 2rem;
    font-size: 3rem;
    font-weight: 100;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    filter: drop-shadow(0 0 5px rgba(27, 27, 27, 0.8));
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }

    &:after {
      content: ''; //underline bar
      position: absolute;
      height: 2px;
      width: 50%;
      bottom: 1rem;
      left: 2rem;
      border-radius: 10px;
      background: var(--white);
    }
  }
  .tech {
    grid-area: tech;
    justify-content: center;
    align-self: end;
    margin-bottom: 1rem;
    grid-column: span 2;
    position: absolute;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, 20px);
    gap: 1rem;
    z-index: 2;

    img {
      margin: 0 5px;
    }
  }

  .project-image {
    grid-area: img;
    opacity: 0.8;
    min-height: 225px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    align-self: center;
  }

  .drop-menu {
    grid-area: dropMenu;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--black);
    width: 100%;
    opacity: 0.5;
    height: 40px;
    overflow: hidden;
    border-radius: 0 0 5px 5px;
    position: absolute;
    z-index: -1;
    transform: translateY(-40px);
    transition: all 250ms ease-in-out;
  }
`;
