import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const StyledSkill = styled.div`
  font-size: 2rem;
  display: grid;
  grid-template-columns: 80px 1fr 1fr;
  padding: 1rem;
  grid-template-rows: 2fr 1fr;
  align-items: center;
  column-gap: 1rem;
  cursor: default;

  @media (max-width: 525px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 2fr 1fr 1fr;
  }

  .gatsby-image-wrapper {
    border-radius: 50%;
    max-width: 100px;
    grid-row: span 2;
  }
  .title {
    padding-left: 5px;
    font-weight: 600;
    align-content: flex-end;
  }
  .years {
    padding-left: 15px;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--light-gray);
    white-space: nowrap;
    flex-wrap: nowrap;
  }

  .percent {
    text-align: right;
  }
  .bar {
    max-width: ${(props) => props.maxWidth}%;
    border-radius: 15px;
    box-shadow: 0px 10px 20px 2px var(--light-gray);
    background: linear-gradient(
      90deg,
      rgba(249, 16, 225, 0.8) 40%,
      rgba(49, 115, 180, 0.8) 100%
    );
    grid-column: span 2;
    text-align: center;
    align-content: center;
  }
`;

const StyledSkillsSection = styled(StyledSection)`
  #skills {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  }
`;

const getYearsMonths = (startDate) => {
  const today = new Date();
  const start = new Date(startDate);
  let stringOut = '';
  const yearsInMonths =
    (today.getFullYear() - start.getFullYear()) * 12 +
    today.getMonth() -
    start.getMonth();
  const totalYears = Math.floor(yearsInMonths / 12);
  const totalMonths =
    totalYears > 0 ? yearsInMonths - totalYears * 12 : yearsInMonths;
  if (totalMonths > 0) {
    //Drop the the months if there are none
    stringOut =
      yearsInMonths < 12
        ? `${yearsInMonths} MONTH${yearsInMonths > 1 ? 'S' : ''}` //Add the S if it's plural
        : `${totalYears} YEAR${totalYears > 1 ? 'S' : ''} ${totalMonths} MONTH${
            yearsInMonths > 1 ? 'S' : ''
          }`;
  } else {
    stringOut =
      yearsInMonths < 12
        ? `${yearsInMonths} MONTH${yearsInMonths > 1 ? 'S' : ''}`
        : `${totalYears} YEAR${totalYears > 1 ? 'S' : ''}`;
  }
  return stringOut;
};

const Skill = ({ title, image, percent, years }) => {
  return (
    <StyledSkill maxWidth={percent}>
      <GatsbyImage image={image} alt={title} className="icon" />
      <span className="title">
        {title}
        <span className="years">{years}</span>
      </span>
      <span className="bar">{percent}%</span>
    </StyledSkill>
  );
};

export default function Skills() {
  const { techstack } = useStaticQuery(graphql`
    query {
      techstack: allSanityTechstack {
        nodes {
          id
          mastery
          started_using
          used_for
          vendor
          logoimage {
            asset {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, PNG]
              )
            }
          }
        }
      }
    }
  `);
  return (
    <StyledSkillsSection>
      <h2 className="section-heading">Skills</h2>
      <div id="skills">
        {techstack.nodes.map((skill) => {
          const image = getImage(skill.logoimage.asset);
          const yearsOfUsing = getYearsMonths(skill.started_using);
          return (
            <Skill
              key={skill.id}
              image={image}
              title={skill.vendor}
              years={yearsOfUsing}
              percent={skill.mastery}
            />
          );
        })}
      </div>
    </StyledSkillsSection>
  );
}
