import React from 'react';
import styled from 'styled-components';

const StyledSectionContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor};
`;

export default function SectionContainer({ children, bgColor }) {
  return (
    <StyledSectionContainer bgColor={bgColor}>
      {children}
    </StyledSectionContainer>
  );
}
