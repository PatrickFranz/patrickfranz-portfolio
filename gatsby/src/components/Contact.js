import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import SectionContainer from './SectionContainer';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { GiModernCity } from 'react-icons/gi';

const StyledContactSection = styled(StyledSection)`
  .contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    p > svg {
      margin-bottom: -4px;
    }
    p > span {
      padding-left: 10px;
    }
    .social-icons svg {
      font-size: 3rem;
    }
    .email:after {
      content: 'patrick@patrickfranz.com';
    }
    .phone:after {
      content: '650.919.3736';
    }
  }
`;

export default function Contact() {
  return (
    <SectionContainer bgColor="rgba(142, 68, 173,0.9)">
      <StyledContactSection id="contact">
        <h2 className="section-heading">Contact</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <p>Reach Out</p>
            <p>
              <HiOutlineMail />
              <span className="email"></span>
            </p>
            <p>
              <HiPhone />
              <span className="phone"></span>
            </p>
            <p>
              <GiModernCity />
              <span>San Diego, California</span>
            </p>
          </div>
          <div className="contact-social">
            <p>&nbsp;</p>
            <p className="social-icons">
              <AiOutlineLinkedin size={70} />
              &nbsp;
              <AiOutlineGithub size={70} />
            </p>
          </div>
        </div>
      </StyledContactSection>
    </SectionContainer>
  );
}
