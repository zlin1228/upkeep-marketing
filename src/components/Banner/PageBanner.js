import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Breadcrumbs from '../../molecules/Breadcrumbs';

const PageBanner = ({ content, theme, breadcrumbs }) => (
  <PageBannerWrapper
    className={`banner-wrapper ${theme || 'dark'}${
      content?.align ? ` keep-${content.align}` : ' keep-center'
    }`}
  >
    {breadcrumbs && (
      <div className="mb-4">
        <Breadcrumbs theme={theme.charAt(0).toUpperCase() + theme.slice(1)} />
      </div>
    )}
    <Container>
      {content.icon && (
        <IconWrapper className={content?.colorClass}>
          {content.icon}
        </IconWrapper>
      )}
      {content.headingKicker && (
        <Headingkicker className={`banner-kicker ${content?.colorClass}`}>
          {content.headingKicker}
        </Headingkicker>
      )}
      {content.title && <Heading>{content.title}</Heading>}
      {content.heading && (
        <SubHeading
          className={content?.align ? `keep-${content.align}` : 'keep-center'}
          dangerouslySetInnerHTML={{ __html: content.heading }}
        />
      )}
      {content.subhead && (
        <Subhead dangerouslySetInnerHTML={{ __html: content.subhead }} />
      )}
      {content.morelink && (
        <MoreLink href={content.morelink} _target="blank">
          Learn more
        </MoreLink>
      )}
    </Container>
  </PageBannerWrapper>
);

export default PageBanner;

export const PageBannerWrapper = styled.section`
  padding: 130px 0 50px;
  &.keep-center {
    text-align: center;
  }
  &.keep-left {
    text-align: left;
  }
  @media (max-width: 568px) {
    padding: 100px 0 30px;
  }
  width: 100%;
  &.dark {
    background: transparent;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    div {
      color: #fff;
    }
  }
  .yellow {
    color: #efc75e;
    span {
      background: #efc75e40;
    }
  }
  .blue {
    color: #007bff;
    span {
      background: #007bff20;
    }
  }
  .purple {
    color: #6c72c7;
    span {
      background: #6c72c740;
    }
  }
  .blue-dark {
    color: #4945fb;
    span {
      background: #4945fb40;
    }
  }
  .green {
    color: #47b972;
    span {
      background: #47b97240;
    }
  }
`;
export const SubHeading = styled.h2`
  max-width: 770px;
  margin: 0 auto 24px;
`;
export const Heading = styled.h1`
  max-width: 770px;
  margin: 0 auto 24px;
`;
export const Headingkicker = styled.h5``;
export const IconWrapper = styled.div`
  text-align: center;
  margin-bottom: 16px;
  span {
    display: inline-block;
    width: 64px;
    height: 64px;
    font-size: 26px;
    border-radius: 50%;
    line-height: 62px;
  }
`;
export const Subhead = styled.p`
  margin: 18px 0 40px 0;
  max-width: 100%;
  width: 770px;
  margin: 0 auto;
  p {
    margin: 0;
  }
`;
export const MoreLink = styled.a`
  font-family: 'IBM Plex Sans';
  font-weight: 500;
  font-size: 14.44px;
  line-height: 19px;
  position: absolute;
  bottom: 0;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  &:after {
    position: absolute;
    content: '';
    top: calc(50% - 2px);
    margin: auto;
    right: -16px;
    transform: rotate(45deg);
    width: 6px;
    height: 6px;
    border-top: 2px solid #007bff;
    border-right: 2px solid #007bff;
    transition: all 0.3s ease;
    @media (max-width: 768px) {
      top: 0;
      bottom: 0;
    }
  }
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: calc(100% + 13px);
    width: 0;
    opacity: 0;
    border-bottom: 2px solid #007bff;
  }
  &:hover {
    &:after {
      right: -24px;
    }
    &:before {
      animation-name: grow-right;
      animation-duration: 0.25s;
      animation-fill-mode: forwards;

      /*animations*/
      @keyframes grow-right {
        0% {
          opacity: 0;
          width: 0;
        }
        100% {
          opacity: 1;
          width: 10px;
        }
      }
    }
  }
`;
