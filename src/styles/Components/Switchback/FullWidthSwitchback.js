import styled from 'styled-components';
import { headingKickerColors } from '../../../utils/colorMappings';

const backgroundMappings = {
  'light blue': '#fafcff',
  light: '#ffffff',
};
export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
  ${props => backgroundMappings[props?.background]}
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 48px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0px auto;
  padding: 0px 15px;
  display: flex;
  flex-direction: ${props => (props.reversed ? 'row-reverse' : 'row')};
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
export const Details = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-right: 15px;
  ${props =>
    props.reversed
      ? 'margin-right: auto; margin-left: 15px;'
      : 'margin-left: auto; margin-right: 15px;'}
  @media (max-width: 991px) {
    max-width: 100%;
    margin: 0px auto;
  }
`;
export const HeadingKicker = styled.h5`
  ${props => headingKickerColors[props.color]};
`;
export const Heading = styled.h2`
  font-style: normal;
  font-weight: bold;
  line-height: 126.5%;
`;
export const Subhead = styled.div`
  p {
    font-style: normal;
    font-weight: normal;
    line-height: 26px;
    color: #707481;
  }
  ul {
    padding: 0;
    list-style: none;
    max-width: 480px;
    margin-bottom: 1rem;
    li {
      margin-bottom: 8px;
    }
  }
  & > ul > li {
    padding-left: 40px;
    position: relative;
    line-height: 30px;
    &:before {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #47b97240;
      left: 0;
      top: 2px;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 18 14'%3e%3cpath fill='none' stroke='%2347B972' stroke-width='2' d='M1 7L6 12L17 1'/%3e%3c/svg%3e");
      background-position: 6px center;
      background-size: 12px;
      background-repeat: no-repeat;
    }
    ul {
      padding: 0;
    }
  }
`;
export const FeaturedContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: ${props =>
    props.reversed
      ? 'scale(120%) translateX(-75px) rotate(15deg);'
      : 'scale(120%) translateX(50px) rotate(-15deg);'};
  @media (max-width: 991px) {
    transform: ${props =>
      props.reversed
        ? 'scale(120%) translate(-75px, 50px) rotate(15deg);'
        : 'scale(120%) translate(50px, 50px) rotate(-15deg);'};
  }
`;
