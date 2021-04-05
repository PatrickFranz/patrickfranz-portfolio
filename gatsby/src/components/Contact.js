import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../styles/GlobalStyles';
import SectionContainer from './SectionContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhoneAlt,
  faCity,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
      color: var(--black);
    }
    p > span {
      padding-left: 10px;
    }
    .social-icons svg {
      font-size: 8rem;
      color: var(--black);
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
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="email">
                patrick<i>@</i>patrickfranz<i>.</i>com
              </span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span className="phone"></span>
            </p>
            <p>
              <FontAwesomeIcon icon={faCity} />
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
                  <FontAwesomeIcon classNmae="social-ico" icon={faGithub} />
                  <p className="social-text">GitHub</p>
                </a>
              </StyledSocialIcon>
              <StyledSocialIcon>
                <a
                  href="https://www.linkedin.com/in/mrfranz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon classNmae="social-ico" icon={faLinkedin} />
                  <p className="social-text">LinkedIn</p>
                </a>
              </StyledSocialIcon>
              <StyledSocialIcon>
                <a
                  href="https://www.dropbox.com/s/nieeq3pys02ff9i/PatrickFranzResume_FE-2021.pdf?dl=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon classNmae="social-ico" icon={faFilePdf} />
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
