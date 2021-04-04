import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import SectionContainer from './SectionContainer';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { GiModernCity } from 'react-icons/gi';
import { GrDocumentPdf } from 'react-icons/gr';

const StyledSocialIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  &:hover .social-text {
    opacity: 1;
  }
  a {
    text-align: center;
  }

  .social-text {
    transition: all 250ms ease;
    opacity: 0;
  }
`;
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
    .phone:after {
      content: '650.919.3736';
    }
    .social-icons {
      display: flex;
      justify-content: center;
      align-items: center;
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
              <span className="email">
                patrick<i>@</i>patrickfranz<i>.</i>com
              </span>
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
            <div className="social-icons">
              <StyledSocialIcon>
                <a
                  href="https://github.com/PatrickFranz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub size={70} />
                  <p className="social-text">GitHub</p>
                </a>
              </StyledSocialIcon>
              <StyledSocialIcon>
                <a
                  href="https://www.linkedin.com/in/mrfranz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin size={70} />
                  <p className="social-text">LinkedIn</p>
                </a>
              </StyledSocialIcon>
              <StyledSocialIcon>
                <a
                  href="https://www.dropbox.com/s/nieeq3pys02ff9i/PatrickFranzResume_FE-2021.pdf?dl=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrDocumentPdf size={70} />
                  <p className="social-text">Resume</p>
                </a>
              </StyledSocialIcon>
            </div>
          </div>
        </div>
      </StyledContactSection>
    </SectionContainer>
  );
}
