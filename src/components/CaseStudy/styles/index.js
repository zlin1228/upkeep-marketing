import styled, { css } from 'styled-components';
import { headingKickerColors } from '../../../utils/colorMappings';
import { font } from '../../../atoms/typography';

const widthMappings = {
  true: {
    wrapper: `
          align-items: flex-end;
          justify-content: flex-start;
          ${props =>
            props?.reversed
              ? 'padding: 0px 0px 0px 15px;'
              : 'padding: 0px 15px 0px 0px;'}
          `,
    image: `
          max-width: 870px;
          border-radius: 8px;
          `,
  },
  false: {
    wrapper: `
          max-width: 1200px; 
          align-items: center;
          justify-content: center;
          padding: 0px 15px;
          margin: 0px auto;
          `,
    image: `
          max-width: 570px;
          border-radius: 12px;
          `,
  },
};
const reverseMappings = {
  true: {
    wrapper: `padding: 0px 0px 0px 15px;`,
    image: `border-radius: 8px 0px 0px 8px;`,
  },
  false: {
    wrapper: `padding: 0px 15px 0px 0px;`,
    image: `border-radius: 0px 8px 8px 0px;`,
  },
};
const themes = {
  Light: '#ffffff',
  Neutral: '#F5F6F9;',
};
export const Section = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  padding: 64px 0px;
  margin: 0px auto;
  background: ${props => themes[props.theme]};
  @media (max-width: 991px) {
    padding: 40px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${props => widthMappings[props?.fullwidth]?.wrapper}
  ${props => reverseMappings[props?.reversed]?.wrapper}
    flex-direction: ${props => (props?.reversed ? 'row-reverse' : 'row')};
  ${props => !props?.fullwidth && 'padding: 0px 15px;'}
  @media (max-width: 991px) {
    max-width: 770px;
    padding: 0px 30px;
    flex-direction: column-reverse;
  }
`;
export const FeaturedImage = styled.div`
  width: 100%;
  height: 100%;
  ${props => widthMappings[props?.fullwidth]?.image}
  ${props => reverseMappings[props?.reversed]?.image}
    ${props => !props?.fullwidth && 'border-radius: 8px;'}
    overflow: hidden;
  @media (max-width: 991px) {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 32px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Content = styled.a`
  display: block;
  position: relative;
  width: 100%;
  padding: ${props => [
    props.reversed ? '0px 62px 0px 0px' : '0px 0px 0px 62px',
  ]};
  height: auto;
  ${props =>
    props?.reversed && props?.fullwidth
      ? `
     margin-right: 90px;
    @media (max-width: 1200px) {
      margin-right: 30px;
    }
    `
      : `
    margin-left: 90px;
    @media (max-width: 1200px) {
      margin-left: 30px;
    }
    `}
  ${props =>
    !props?.fullwidth &&
    `
    margin: 0px;
    @media (max-width: 1200px) {
      margin: 0px;
    }
    `}
    @media (max-width: 991px) {
    max-width: 100%;
    margin: 0px 0px 30px;
    padding: 0px;
  }
`;
export const Details = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 32px;
`;
export const KickerWrapper = styled.div`
  display: flex;
`;
export const HeadingKicker = styled.h5`
  width: max-content;
  height: auto;
  ${font('overline', 'lg', '700')}
  margin-bottom: 16px;
  &:first-child {
    padding-right: 24px;
  }
  ${props => headingKickerColors[props?.color]}
`;

export const SecondaryHeadingKicker = styled.h5`
  width: max-content;
  height: auto;
  ${font('overline', 'lg', '700')}
  margin-bottom: 16px;
  &:first-child {
    padding-right: 24px;
  }
  color: ${props => props.color};
`;

export const Heading = styled.h2`
  width: 100%;
  height: auto;
  color: #0d141a;
  ${font('display', 'lg', '700')}
  margin-bottom: 16px;
`;
export const Subhead = styled.div`
  width: 100%;
  height: auto;
  ${font('text', 'lg', '400')}
  color: #515667;
  margin-bottom: 16px;
`;

export const LinkStyles = css`
  ${font('text', 'md', '600')}
`;
