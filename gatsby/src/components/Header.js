import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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

  .headshot {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 50%;
  }
  .title-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 5rem;

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
          gatsbyImageData(width: 300)
        }
      }
    }
  `);
  return (
    <StyledHeader>
      <Navigation />
      <div className="headshot">
        <GatsbyImage
          image={getImage(data.headshot.childImageSharp.gatsbyImageData)}
          alt="Patrick Franz"
        />
      </div>
      <div className="title-text">
        <p>web-developer: &#123;</p>
        {/* <Typewriter
          options={{
            strings: [
              'react-devloper: {',
              'animal-lover: {',
              'styled-components-fanboi: {',
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
        /> */}
        <p className="name-text">patrick franz</p>
        <p className="">&#125;;</p>
      </div>
    </StyledHeader>
  );
};

export default Header;
