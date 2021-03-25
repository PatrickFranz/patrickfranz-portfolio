import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';

const StyledSectionContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor};
`;

export default function SectionContainer({ children }, props) {
  return (
    <StyledSectionContainer bgColor={props.bgColor}>
      {children}
    </StyledSectionContainer>
  );
}
