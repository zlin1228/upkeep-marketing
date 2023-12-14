import React from 'react';

import CallToAction from '../../../../CallToAction';

import {
  Badge,
  Bottom,
  Button,
  Container,
  Top,
  Wrapper,
} from '../styles/Card.styled';

const Card = ({
  theme,
  mostPopular,
  price,
  eyebrow,
  name,
  description,
  callToAction,
}) => (
  <Container theme={theme} mostPopular={mostPopular}>
    <Wrapper>
      <Top>
        <div className="header">
          {name && <p className="heading">{name}</p>}
          {eyebrow && (
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: eyebrow }}
            />
          )}
        </div>
        {price && (
          <p className="price">
            <span className="price">${price.replace('$', '')}</span>
            <span className="period">/month per user</span>
          </p>
        )}
        {mostPopular && (
          <Badge>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <g clipPath="url(#clip0_8697_6472)">
                <path
                  d="M8.53834 1.60996C8.70914 1.19932 9.29086 1.19932 9.46166 1.60996L11.5278 6.57744C11.5998 6.75056 11.7626 6.86885 11.9495 6.88383L17.3123 7.31376C17.7556 7.3493 17.9354 7.90256 17.5976 8.19189L13.5117 11.6919C13.3693 11.8139 13.3071 12.0053 13.3506 12.1876L14.5989 17.4208C14.7021 17.8534 14.2315 18.1954 13.8519 17.9635L9.26063 15.1592C9.10062 15.0615 8.89938 15.0615 8.73937 15.1592L4.14806 17.9635C3.76851 18.1954 3.29788 17.8534 3.40108 17.4208L4.64939 12.1876C4.69289 12.0053 4.6307 11.8139 4.48831 11.6919L0.402413 8.19189C0.0646445 7.90256 0.244408 7.3493 0.687735 7.31376L6.05054 6.88383C6.23744 6.86885 6.40024 6.75056 6.47225 6.57744L8.53834 1.60996Z"
                  fill="#F0A52B"
                />
              </g>
              <defs>
                <clipPath id="clip0_8697_6472">
                  <rect width="18" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Most Popular</span>
          </Badge>
        )}
      </Top>

      <Bottom>
        {description && (
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {callToAction && (
          <Button>
            <CallToAction
              size="xl"
              variant={
                theme === 'darkBlue' ? 'Filled - Steel' : 'Outline - Dark'
              }
              {...callToAction}
            />
            <p className="disclaimer">No Credit Card Required.</p>
          </Button>
        )}
      </Bottom>
    </Wrapper>
  </Container>
);

export default Card;
