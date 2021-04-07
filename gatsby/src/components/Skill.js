import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-plugin-sanity-image';
const StyledSkill = styled.div`
  font-size: 2rem;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1rem;
  grid-template-rows: auto auto;
  align-items: center;
  column-gap: 1rem;
  cursor: default;

  @media (max-width: 525px) {
    grid-template-columns: 1fr;
    justify-items: center;
    .title {
      font-size: 1.5rem;
    }
    .years {
      display: none;
    }
    .bar {
      font-size: 1.5rem;
    }
  }

  img {
    border-radius: 5px;
    max-width: 75px;
    grid-row: span 2;
    margin: 0;
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
    max-width: ${(props) => props.maxWidth - 2}%;
    width: 100%;
    border-radius: 15px;
    box-shadow: 0px 10px 20px 2px var(--light-gray);
    background: linear-gradient(
      90deg,
      rgba(249, 16, 225, 0.8) 40%,
      rgba(49, 115, 180, 0.8) 100%
    );
    text-align: center;
    align-content: center;
  }
`;

export default function Skill({ title, image, percent, years }) {
  return (
    <StyledSkill maxWidth={percent}>
      <Image {...image} alt={title} className="icon" width={200} />
      <span className="title">
        {title}
        <span className="years">{years}</span>
      </span>
      <span className="bar">{percent}%</span>
    </StyledSkill>
  );
}
