import styled from 'styled-components';
import { textColor } from '../../../utils/colorMappings';
import backgroundDark from '../../../assets/background/hero-bg-dark.svg';
import backgroundLight from '../../../assets/background/hero-bg-light.svg';
import backgroundBlue from '../../../assets/background/hero-bg-blue.svg';
import backgroundGray from '../../../assets/background/hero-bg-gray.svg';

export const backgroundThemes = {
  Dark: `background-image: url(${backgroundDark});`,
  Light: `background-image: url(${backgroundLight});`,
  Blue: `background-image: url(${backgroundBlue});`,
  Gray: `background-image: url(${backgroundGray});`,
};
const headingKickerThemes = {
  Dark: 'color: #007bff;',
  Light: 'color: #007bff;',
  Blue: 'color: #FFFFFF;',
};
export const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 456px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 96px 0px;
  ${props => backgroundThemes[props.theme]}
  background-repeat: no-repeat;
  background-position: 0px 0px, 100% 100%;
  background-size: cover;
  @media (max-width: 1200px) {
    border-radius: 0px;
  }
  @media (max-width: 768px) {
    padding: 48px 0px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  height: auto;
  padding: 0px 30px;
  margin: 0px auto;
  justify-content: space-between;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    max-width: 570px;
  }
  .testimonial-container {
    min-height: 230px;
  }
  @media (max-width: 499px) {
    .testimonial-container {
      min-height: 260px;
    }
  }
`;
export const Details = styled.div`
  width: 100%;
  max-width: 580px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 32px 0px 0px 0px;
  text-align: left;
  @media (max-width: 992px) {
    text-align: center;
    margin-bottom: 50px;
  }
`;
export const HeadingKicker = styled.h5`
  ${props => headingKickerThemes[props.color]}
  margin-bottom: 16px;
`;
export const Heading = styled.h2`
  ${props => textColor[props.color]}
  margin-bottom: 16px;
`;
export const Subhead = styled.div`
  ${props => textColor[props.color]}
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 16px;
`;

export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 478px;
  align-items: center;
`;

export const Trustbar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 44px;
`;

export const TrustbarHeading = styled.p`
  font-weight: 700;
  font-size: 13.5px;
  line-height: 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #515667;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  img {
    margin: 0px 20px;
  }
  img:first-child {
    margin-left: 0px;
  }
  @media (max-width: 576px) {
    justify-content: space-around;
    img {
      margin: 0px 10px;
    }
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 100%;
  max-height: 20px;
  object-fit: contain;
  @media (max-width: 576px) {
    max-height: 13px;
  }
`;

export const FallbackText = styled.div`
  font-weight: 400;
  font-size: 13.5px;
  line-height: 150%;
  color: #515667;
  margin-top: 20px;
`;
