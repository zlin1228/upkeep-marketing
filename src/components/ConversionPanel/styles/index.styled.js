import styled from 'styled-components';
import { textColor } from '../../../utils/colorMappings';
import backgroundDark from '../../../assets/background/hero-bg-dark.svg';
import backgroundLight from '../../../assets/background/hero-bg-light.svg';
import backgroundBlue from '../../../assets/background/hero-bg-blue.svg';
import { font } from '../../../atoms/typography';

export const backgroundThemes = {
  Dark: `background-image: url(${backgroundDark});`,
  Light: `background-image: url(${backgroundLight});`,
  Blue: `background-image: url(${backgroundBlue});`,
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
  ${props =>
    props.layout === 'Floating' &&
    `
  max-width: 1200px;
  margin: 0px auto;
  border-radius: 16px;
  `}
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
  width: 100%;
  max-width: 1140px;
  height: auto;
  padding: 0px 15px;
  margin: 0px auto;
  display: grid;
  ${props =>
    props?.showTestimonial
      ? 'grid-template-columns: repeat(2, 1fr);'
      : 'grid-template-columns: repeat(1, 1fr);'}
  justify-content: space-between;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column-reverse;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  ${props =>
    props?.showTestimonial
      ? 'max-width: 525px; margin-right: auto;'
      : 'max-width: 770px; text-align: center; margin: 0px auto;'}
  padding: 0px;
  @media (max-width: 991px) {
    max-width: 100%;
    ${props => props?.showTestimonial && 'margin-top: 30px;'}
  }
  .social-proof-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .social-proof-stars {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 24px;
    svg {
      width: 21px;
      height: 21px;
      @media (max-width: 768px) {
        width: 14px;
        height: 14px;
      }
    }
    p {
      font-size: 18px;
      line-height: 25px;
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: initial;
      }
    }
  }
  .social-proof-logos {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    img {
      margin: 0px 38px 0px 0px;
      @media (max-width: 499px) {
        width: 100%;
        max-width: 80px;
        height: auto;
        margin: 0px 14px 0px 0px;
        object-fit: contain;
      }
    }
    img:last-child {
      margin: 0px;
    }
  }
`;
export const HeadingKicker = styled.p`
  ${font('overline', 'md', '700')}
  ${props => headingKickerThemes[props.color]}
`;
export const Heading = styled.h2`
  ${font('display', 'md', '700')}
  ${props => textColor[props.color]}
`;
export const Subhead = styled.div`
  &,
  & p {
    ${font('text', 'md', '400')}
    ${props => textColor[props.color]}
  }
`;
export const FallbackText = styled.div`
  ${font('text', 'sm', '400')}
  ${props => textColor[props.color]}
`;
export const FreeTrialWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  .free-trial-signup {
    padding: 0px;
    margin: 0px;
  }
`;
export const Buttons = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto 24px;
  padding: 0px;
  a:first-child {
    margin-right: 16px;
    @media (max-width: 768px) {
      margin: 0px 0px 16px 0px;
    }
  }
  .secondary {
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    color: #ffffff;
    background: transparent;
    &:hover {
      border: 2px solid #ffffff;
      color: #ffffff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const setCallToActionStyles = component => `
  display: block;
  width: auto;
  height: auto;
  text-align: center;
  white-space: nowrap;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.5px;
  padding: 10px 24px;
  ${
    component?.addOns === 'Show Testimonials'
      ? 'margin: 0px 0px 16px 0px;'
      : 'margin: 0px auto 16px auto;'
  }border-radius: 6px;
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 28px;
  }
  @media (max-width: 499px) {
    font-size: 16px;
  }
`;
