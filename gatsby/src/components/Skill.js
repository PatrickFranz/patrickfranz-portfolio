import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

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
    border-radius: 5px;
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

export default function Skill({ title, image, percent, years }) {
  return (
    <StyledSkill maxWidth={percent}>
      {/* <GatsbyImage image={image} alt={title} className="icon" />
      <span className="title">
        {title}
        <span className="years">{years}</span>
      </span>
      <span className="bar">{percent}%</span> */}
    </StyledSkill>
  );
}
