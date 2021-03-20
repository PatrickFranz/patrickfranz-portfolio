import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';

const StyledContactSection = styled(StyledSection)``;

export default function Contact() {
  return (
    <StyledContactSection>
      <h2 className="section-heading">Contact</h2>
    </StyledContactSection>
  );
}
