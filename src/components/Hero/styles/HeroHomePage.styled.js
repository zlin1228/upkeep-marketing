import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { shadow } from '../../../atoms/shadows';
import { atMinWidth } from '../../../atoms/breakpoints';

import GridBackground from '../../../assets/background/grid-gray.svg';

export const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      124.65deg,
      #f2f6fc 22.27%,
      rgba(255, 255, 255, 0) 47.29%
    ),
    #ffffff;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  min-height: 1006px;
  padding: ${spacing[104]} ${spacing[16]} 0rem ${spacing[16]};
  margin: 0px auto;
  ${atMinWidth.md`
    min-height: unset;
    padding: ${spacing[112]} ${spacing[32]} 0rem ${spacing[32]};
  `}
  ${atMinWidth.xl`
    min-height: 834px;
    padding: ${spacing[144]} ${spacing[32]} 0rem ${spacing[32]};
    max-width: ${containers.xl};
  `}
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${GridBackground});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[48]};
  z-index: 2;
  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: 640px 1fr;
    align-items: center;
    gap: ${spacing[72]};
  `}
  @media(min-width: 1440px) {
    gap: ${spacing[144]};
  }
  @media (min-width: 1700px) {
    gap: ${spacing[72]};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[48]};
  .social-proof {
    width: fit-content;
    margin: 0px auto;
    ${atMinWidth.xl`
      margin: 0px;
    `}
    .rating p {
      ${font('text', 'sm', '400')}
      color: ${color.darkBlue[600]};
    }
    .social-proof-logos {
      gap: 25px;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[24]};
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[1000]};
    text-align: center;
    ${atMinWidth.md`
      ${font('display', 'lg', '700')}
    `}
    ${atMinWidth.xl`
      text-align: left;
    `}

    span {
      display: inline;
      color: ${color.primary[700]};
    }
  }
  .subhead,
  .subhead p {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
    text-align: center;
    ${atMinWidth.xl`
      text-align: left;
    `}
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  ${atMinWidth.md`
    width: fit-content;
    flex-direction: row;
    margin: 0px auto;
  `}
  ${atMinWidth.xl`
    margin: 0px;
  `}
  a {
    width: 100%;
    ${atMinWidth.md`
      width: fit-content;
    `}
  }
`;

export const Image = styled.div`
  position: relative;
  margin-top: 32px;
  ${atMinWidth.lg`
      margin-top: unset;
  `}
  .screen-image {
    width: 100%;
    height: auto;
    ${atMinWidth.xl`
      width: 929px;
      height: 618px;
    `};
  }
  .phone-image {
    position: absolute;
    height: 200.59px;
    width: 98.41px;
    top: 50px;
    left: 0px;
    transition: transform 0.1s linear;
    z-index: 1;
    ${atMinWidth.xs`
      width: auto;
      height: 100%;
    `}
    ${atMinWidth.md`
      width: 182.27px;
      height: 394.68px;
      top: 130px;
    `}
    ${atMinWidth.lg`
      top: 120px;
    `}
    ${atMinWidth.xl`
      top: 234px;
      width: 284.7330322265625px;
      height: 580.364990234375px;
    `}
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.steel[400]};
  padding: 0px;
  border-radius: 50%;
  border: none;
  outline: none;
  ${shadow('xxl', 'dark')}
  opacity: 1;
  transform: translate(-40%, -50%);
  transition: all 250ms ease-in-out;
  z-index: 2;
  ${atMinWidth.sm`
    width: 100px;
    height: 100px;
  `}
  ${atMinWidth.xl`
    top: 40%;
    left: 25%;
    transform: translate(-25%, -40%);
  `}
  &:hover {
    background-color: ${color.steel[600]};
    border: none;
    outline: none;
  }
  &:focus {
    outline: none;
  }
  svg {
    width: 25px;
    height: 25px;
    transform: translateX(3px);
    ${atMinWidth.sm`
      width: 40px;
      height: 40px;
    `}
  }
`;

export const Spacer = styled.div`
  width: 100%;
  background-color: ${color.midnight[25]};
  height: 130px;
  margin-top: -25px;
  @media (min-width: 375px) {
    margin-top: -150px;
    height: 150px;
  }
  ${atMinWidth.xs`
    height: 250px;
    margin-top: -187.5px;
  `}
  ${atMinWidth.xl`
    height: 118px;
    margin-top: unset;
  `}
`;
