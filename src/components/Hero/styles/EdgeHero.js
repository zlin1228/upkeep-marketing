import styled, { css } from 'styled-components';

const sectionThemes = {
  Light: 'background: #fff;',
  Dark: 'background: #060606;',
  Blue: 'background: #007bff;',
};
const textMappings = {
  Dark: 'color: #FFFFFF;',
  Light: 'color: #33394B;',
  Blue: 'color: #FFFFFF;',
};
export const primaryButtonThemes = {
  Light: 'Primary',
  Blue: 'Tertiary',
  Dark: 'Primary',
};
export const secondaryButtonThemes = {
  Light: 'Secondary',
  Blue: 'Secondary-Light',
  Dark: 'Secondary-Light',
};
export const Section = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 0px 0px;
  ${props => sectionThemes[props?.theme]}
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 96px 15px 0px;
  }
  .gatsby-image {
    max-width: 1428px;
    max-height: 340px;
    margin: 0px auto;
    z-index: 2;
    @media (max-width: 575px) {
      width: 776px !important;
      transform: translateX(-140px);
    }
  }
`;
export const OuterWrapper = styled.div`
  width: 100%;
  max-width: 1230px;
  height: auto;
  margin: 24px auto 0px auto;
  padding: 0px 15px 96px;
  @media (max-width: 575px) {
    padding: 0px 15px 64px;
  }
`;
export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 42px auto 0px auto;
`;
export const GradientBackground = styled.div`
  width: 100%;
  height: 340px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: linear-gradient(137.2deg, #0066ff 15.93%, #ff0019 123.81%);
  opacity: 0.2;
  filter: blur(147px);
  z-index: 1;
  @media (max-width: 768px) {
    height: 190px;
  }
`;
export const HeadingKicker = styled.h5`
  text-align: center;
  ${props => textMappings[props?.theme]}
`;
export const Heading = styled.div`
  width: 100%;
  height: auto;
  font-weight: bold;
  font-size: 56px;
  line-height: 71px;
  text-align: center;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 37.32px;
    line-height: 1.15;
  }
  @media (max-width: 499px) {
    font-size: 32.32px;
    line-height: 1.15;
  }
  ${props => textMappings[props?.theme]}
  h1, h2, h3,  h4, h5, h6, p, strong, em, b, span {
    width: 100%;
    height: auto;
    font-weight: bold;
    font-size: 56px;
    line-height: 71px;
    text-align: center;
    margin-bottom: 24px;
    ${props => textMappings[props?.theme]}
    @media (max-width: 768px) {
      font-size: 37.32px;
      line-height: 1.15;
    }
    @media (max-width: 499px) {
      font-size: 32.32px;
      line-height: 1.15;
    }
  }
`;
export const Subhead = styled.div`
  width: 100%;
  height: auto;

  font-size: 21.6px;
  line-height: 32px;
  text-align: center;
  color: #515667;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.65;
  }
  ${props => textMappings[props?.theme]}
  h1, h2, h3,  h4, h5, h6, p, strong, em, b {
    width: 100%;
    height: auto;

    font-size: 21.6px;
    line-height: 32px;
    text-align: center;
    color: #515667;
    margin-bottom: 24px;
    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.65;
    }
  }
`;
export const PrimaryButton = css`
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  border-radius: 4px;
  margin: 0px auto;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  svg {
    margin-left: 10px;
    path {
      fill: #007bff;
      transition: all 300ms ease-in-out;
    }
  }
  &:hover {
    svg path {
      fill: #1f47cd;
    }
  }
`;
