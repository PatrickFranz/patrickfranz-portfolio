import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import { graphql, useStaticQuery } from 'gatsby';
import { getYearsMonths } from './helper-functions';
import Skill from './Skill';
import SectionContainer from './SectionContainer';

const StyledSkillsSection = styled(StyledSection)`
  #skills {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  }
`;

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
            ...ImageWithPreview
          }
        }
      }
    }
  `);
  return (
    <SectionContainer>
      <StyledSkillsSection id="skills">
        <h2 className="section-heading">Skills</h2>
        <div id="skills">
          {techstack.nodes
            .map((skill) => {
              const yearsOfUsing = getYearsMonths(skill.started_using);
              return (
                <Skill
                  key={skill.id}
                  image={skill.logoimage}
                  title={skill.vendor}
                  years={yearsOfUsing}
                  percent={skill.mastery}
                />
              );
            })
            .sort((a, b) => b.props.percent - a.props.percent)}
        </div>
      </StyledSkillsSection>
    </SectionContainer>
  );
}
