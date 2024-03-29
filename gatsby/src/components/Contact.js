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

  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  &:hover .social-text {
    opacity: 1;
  }

  a {
    text-align: center;
  }

  .social-text {
    transition: all 250ms ease;
    opacity: 0;

    @media (max-width: 1024px) {
      font-size: 2rem;
      opacity: 1;
    }
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;
const StyledContactSection = styled(StyledSection)`
  .contact-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;
    justify-content: center;
    @media (max-width: 1200px) {
      font-size: 2rem;
    }
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }

    p > svg {
      margin-bottom: -4px;
      color: var(--black);
      @media (max-width: 1200px) {
        font-size: 2rem;
      }
      @media (max-width: 600px) {
        font-size: 1.5rem;
      }
    }
    p > span {
      margin-left: 20px;
      @media (max-width: 1200px) {
        font-size: 2rem;
      }
      @media (max-width: 600px) {
        font-size: 1.5rem;
      }
    }
    .social-icons svg {
      font-size: 8rem;
      color: var(--black);
      @media (max-width: 1200px) {
        font-size: 2rem;
      }
      @media (max-width: 600px) {
      }
    }
    .social-icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 1200px) {
        font-size: 2rem;
      }
      @media (max-width: 600px) {
        font-size: 1.5rem;
      }
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
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="email">
                patrick<i>@</i>patrickfranz<i>.</i>com
              </span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span className="phone">650.919.3736</span>
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
                  <FontAwesomeIcon className="social-ico" icon={faGithub} />
                  <p className="social-text">GitHub</p>
                </a>
              </StyledSocialIcon>
              <StyledSocialIcon>
                <a
                  href="https://www.linkedin.com/in/mrfranz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="social-ico" icon={faLinkedin} />
                  <p className="social-text">LinkedIn</p>
                </a>
              </StyledSocialIcon>
              <StyledSocialIcon>
                <a
                  href="https://www.dropbox.com/s/jdj42w82y1nbm7v/PatrickFranzResume_06-2021.pdf?dl=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="social-ico" icon={faFilePdf} />
                  <p className="social-text">Résumé</p>
                </a>
              </StyledSocialIcon>
            </div>
          </div>
        </div>
      </StyledContactSection>
    </SectionContainer>
  );
}
