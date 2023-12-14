import React from 'react';
import CallToAction from '../../CallToAction';
import GatsbyImage from '../../Image/GatsbyImage';
import UpKeepLogo from '../../../assets/logo-header.svg';
import {
  Container,
  Wrapper,
  Text,
  Buttons,
  Button,
  Cancel,
} from '../styles/CookieBar';

const CookieBar = ({ enableCookie, cancelCookie, showCookieBar }) => {
  if (!showCookieBar) return null;
  return (
    <Container>
      <Wrapper>
        <GatsbyImage src={UpKeepLogo} alt="Upkeep" classes="logo" />
        <Text>
          This website uses cookies to ensure you get the best experience.{' '}
          <CallToAction url="/privacy" label="Privacy Policy" />
        </Text>
        <Buttons>
          <Button
            type="button"
            aria-label="Accept Cookies"
            onClick={() => enableCookie()}
          >
            Accept Cookies
          </Button>
          <Cancel
            type="button"
            aria-label="Close Cookie Bar"
            onClick={() => cancelCookie()}
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 0.998535L13.4999 12.9985"
                stroke="white"
                stokewidth="1.92243"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 0.998535L1.50007 12.9985"
                stroke="white"
                stokewidth="1.92243"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Cancel>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default CookieBar;
