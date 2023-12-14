import styled, { css } from 'styled-components';
import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Container = styled.div`
  width: 100%;
  max-width: 840px;
  padding: 0px 24px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
  `}
`;
export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: ${props =>
    props?.reverse ? "'thumbnail details'" : "'details thumbnail'"};
  grid-template-columns: ${props =>
    props?.reverse ? '570px 470px;' : '470px 570px;'};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0px;
  margin: 0px auto;
  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0px 32px;
  }
  @media (max-width: 992px) {
    ${({ index, numOfSwitchbacks }) => {
      if (index + 1 === numOfSwitchbacks) {
        return `padding: 0px;`;
      }
      return `padding: 0px 0px 64px;`;
    }}
    grid-template-areas:
      'details'
      'thumbnail';
    grid-template-columns: unset;
    justify-content: center;
  }
`;
export const FeaturedContent = styled.div`
  grid-area: thumbnail;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  @media (max-width: 992px) {
    max-width: 570px;
  }
`;
export const Details = styled.div`
  grid-area: details;
  width: 100%;
  max-width: 470px;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  padding: 0px;
  @media (max-width: 992px) {
    max-width: 570px;
    margin-bottom: 30px;
  }
`;
export const Row = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  @media (max-width: 992px) {
    justify-content: center;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
export const HeadingKicker = styled.h5`
  ${font('overline', 'lg', '700')}
  color: ${color.primary[700]};
`;
export const Heading = styled.div`
  &&,
  p {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[900]};
    ${atMinWidth.sm`
    ${font('display', 'md', '700')}
  `}
    ${atMinWidth.xl`
    ${font('display', 'lg', '700')}
  `}
  }
  && span {
    color: ${color.primary[700]};
  }
`;
export const Subhead = styled.div`
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
  strong {
    display: contents;
    ${font('text', 'md', '700')}
  }
  p {
    margin-bottom: 24px;
  }
  ul {
    padding: 0;
    list-style: none;
    max-width: 480px;
    li {
      margin: 16px 0;
      display: flex;
      flex-direction: column;
      padding: 0px;
      ul > li {
        font-size: 0.8rem;
        position: relative;
        list-style: circle;
      }
    }
  }
  & > ul > li {
    padding-left: 36px;
    position: relative;
    line-height: 24px;
    svg {
      stroke: ${color.common.white};
    }
    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      left: 0;
      top: 2px;
      background-color: ${color.primary[700]};
    }
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      left: -1.5px;
      top: 2.2px;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 18 14'%3e%3cpath fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' d='M1 7L6 12L17 1'/%3e%3c/svg%3e");
      background-position: 6px center;
      background-size: 10px;
      background-repeat: no-repeat;
    }
    ul {
      padding: 0;
    }
  }
`;
export const SpecialCallToAction = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0px 10px;
  width: fit-content;
  min-height: 48px;
  padding: 14px 24px;
  margin-right: 24px;
  background: #00254c;
  border-radius: 4px;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  opacity: 1;
  &:hover {
    color: #ffffff;
    opacity: 0.85;
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin: 0px auto 24px;
  }
  img {
    width: 24.69px;
    height: 24.69px;
  }
`;

export const ArrowLink = css`
  padding-right: 0px;
  &:before {
    top: 51%;
  }
`;
