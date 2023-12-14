import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';
import BackgroundXl from '../assets/trial-hero-bg-xl.png';
import BackgroundLg from '../assets/trial-hero-bg-lg.png';
import BackgroundMd from '../assets/trial-hero-bg-md.png';
import BackgroundSm from '../assets/trial-hero-bg-sm.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-image: url(${BackgroundSm});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  ${atMinWidth.sm`
    gap: 32px;
    background-image: url(${BackgroundMd});
  `}
  ${atMinWidth.md`
    gap: 64px;
    background-image: url(${BackgroundLg});
  `}
  ${atMinWidth.xl`
    background-image: url(${BackgroundXl});
  `}
`;
export const Header = styled.header`
  width: 100%;
  height: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeadingWrapper = styled.div`
  max-width: 506px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 32px;
  ${atMinWidth.lg`
    max-width: 770px;
  `}
  ${atMinWidth.xl`
    max-width: 907px;
     margin-bottom: 64px;
  `}
    .heading-kicker {
    ${font('overline', 'lg', '700')}
    color: ${color.primary[700]};
  }
  .heading {
    ${font('display', 'md', '700')}
    ${atMinWidth.md`
      ${font('display', 'lg', '700')}
    `}
    color: ${color.darkBlue[900]};
  }
`;

export const Section = styled.section`
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px 19px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.md`
    gap: 64px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
    display: grid;
    grid-template-columns: 570px 1fr;
    gap: 130px;
  `}
`;
export const Column = styled.div`
  width: 100%;
  .social-proof {
    ${atMinWidth.xs`
      align-items: flex-start;
      justify-content: flex-start;
    `}
  }
  .rating p {
    color: ${color.darkBlue[600]};
  }
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
    img {
      width: 100%;
      height: auto;
    }
  }
`;
export const Subhead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${font('text', 'lg', '400')}
  color: ${color.darkBlue[600]};
  strong {
    display: contents;
    ${font('text', 'lg', '600')}
  }
  p {
    margin-bottom: 0px;
  }
  ul {
    width: 100%;
    padding: 0px;
    margin: 0px;
    list-style: none;
    li {
      margin: 16px 0px;
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
      stroke: #007bff;
    }
    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      left: 0;
      top: 4px;
      background-color: ${color.primary[700]};
    }
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      left: -1.5px;
      top: 4px;
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
