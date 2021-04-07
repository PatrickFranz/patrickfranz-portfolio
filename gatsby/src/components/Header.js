import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import Navigation from './Navigation';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  background-color: var(--dark-blue);
  color: var(--white);
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 5px var(--dark-blue);
  @media (max-width: 600px) {
    flex-direction: column;
  }

  .headshot {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 50%;
    @media (max-width: 1200px) {
      width: 30%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  .title-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 4rem;

    @media (max-width: 1200px) {
      font-size: 3rem;
    }
    @media (max-width: 600px) {
      width: 80%;
      font-size: 2rem;
      margin: 0 auto;
    }

    .name-text {
      margin-left: 5rem;
      color: var(--pink);
    }
  }
`;
const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, placeholder: BLURRED)
        }
      }
    }
  `);
  return (
    <StyledHeader>
      <Navigation />
      <div className="headshot">
        <GatsbyImage
          image={data.headshot.childImageSharp.gatsbyImageData}
          alt="Patrick Franz"
        />
      </div>
      <div className="title-text">
        <Typewriter
          options={{
            strings: [
              'react-devloper: {',
              'animal-lover: {',
              'styled-components-styler: {',
              'world-sailor: {',
              'gatbsy-aficionado {',
              'git-commiter {',
              'web-developer: {',
            ],
            autoStart: true,
            loop: true,
            delay: 40,
            pauseFor: 800,
          }}
        />
        <p className="name-text">patrick franz</p>
        <p className="">&#125;;</p>
      </div>
    </StyledHeader>
  );
};

export default Header;
