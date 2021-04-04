import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import SectionContainer from './SectionContainer';

const StyledContactSection = styled(StyledSection)`
  .contact-wrapper {
    display: flex;
    flex-direction: row;
  }

  div {
    border: 1px solid blue;
  }
`;

export default function Contact() {
  return (
    <SectionContainer bgColor="rgba(255, 234, 167,0.7)">
      <StyledContactSection id="contact">
        <h2 className="section-heading">Contact</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Contact Info</h2>
          </div>
          <div className="contact-form">
            <h2>Contact Form</h2>
          </div>
        </div>
      </StyledContactSection>
    </SectionContainer>
  );
}
