import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import SectionContainer from './SectionContainer';

const StyledContactSection = styled(StyledSection)``;

export default function Contact() {
  return (
    <SectionContainer bgColor="rgba(255, 234, 167,0.7)">
      <StyledContactSection>
        <h2 className="section-heading">Contact</h2>
      </StyledContactSection>
    </SectionContainer>
  );
}
