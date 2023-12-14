import styled from 'styled-components';
import { headingKickerColors, iconColors } from '../../../utils/colorMappings';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const backgroundColors = {
  Neutral: 'background: #FAFCFF;',
  White: 'background:#FFFFFF;',
  Dark: 'background: #121212;',
  'Light Blue': 'background: #F0F6FF;',
};
export const headingColors = {
  Neutral: 'color: #282F3C;',
  White: 'color:#0b1a2b;',
  Dark: 'color: #FAFAFA;',
  'Light Blue': 'color: #0b1a2b;',
};
export const subheadColors = {
  Neutral: 'color: #707481;',
  White: 'color: #707481;',
  Dark: 'color: #FAFAFA;',
  'Light Blue': 'color: #707481;',
};
export const Section = styled.section`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  margin: 0px auto;
  padding: 146px 0px;
  overflow: hidden;
  ${props => backgroundColors[props.theme]};
  ${props =>
    props?.isHeroComponent === 'true' &&
    `padding: 175px 0px 96px;
        @media (max-width: 768px) { padding: 100px 0px 50px; }
      `}
  ${props =>
    props?.showAnnouncementBar === 'true' &&
    props?.isHeroComponent === 'true' &&
    `padding: 200px 0px 96px;
        @media (max-width: 768px) { padding: 200px 0px 50px; }
      `}
  @media(max-width: 992px) {
    padding: 96px 0px;
  }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 690px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  margin: 0px auto;
  padding: 0px 30px;
  @media (max-width: 992px) {
    max-width: 570px;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto 16px;
  position: relative;
  width: 100%;
  height: auto;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
export const IconHolder = styled.div`
  margin: 0px auto 16px;
  width: 64px;
  height: 64px;
  background: #ffffff;
  border: 1px solid #eaeaec;
  border-radius: 9999px;
  display: grid;
  place-items: center;
`;
export const IconWrapper = styled.div`
  margin: 0px auto 16px;
  span {
    text-align: center;
    display: inline-block;
    width: 64px;
    height: 64px;
    font-size: 26px;
    border-radius: 50%;
    line-height: 62px;
    ${props => iconColors[props.color]};
  }
`;
export const HeadingKicker = styled.p`
  ${font('overline', 'md', '700')}
  ${props => headingKickerColors[props.color]};
`;
export const Heading = styled.h2`
  ${font('display', 'md', '700')}
  ${props => headingColors[props.theme]};
  ${atMinWidth.lg`
    ${font('display', 'lg', '700')}
  `}
`;
export const Subhead = styled.div`
  &,
  & p {
    ${font('text', 'lg', '500')}
    ${props => subheadColors[props.theme]};
  }
`;
export const FreeTrialCTA = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: fit-content;
  height: auto;
  margin: 0px 16px;
  @media (max-width: 992px) {
    margin: 0px 0px 8px;
  }
  .free-trial-signup {
    padding: 0px;
    margin: 0px;
    max-width: 100%;
  }
`;
export const SocialProof = styled.div`
  width: 100%;
  max-width: 470px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  margin: 0px auto;
  img {
    width: fit-content;
    height: auto;
    min-height: 28px;
    object-fit: cover;
    @media (max-width: 499px) {
      min-height: 20px;
      max-height: 20px;
    }
  }
`;
export const BackgroundImages = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ImageLeftWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0px;
  left: 0px;
  width: fit-content;
  max-width: 500px;
  height: 100%;
  @media (max-width: 1300px) {
    transform: translateX(-15%);
  }
  @media (max-width: 1024px) {
    transform: translateX(-33%);
  }
  @media (max-width: 768px) {
    transform: translateX(-50%);
  }
  @media (max-width: 575px) {
    transform: translateX(-70%);
  }
  @media (max-width: 499px) {
    transform: translateX(-75%);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const ImageRightWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0px;
  right: 0px;
  width: fit-content;
  max-width: 500px;
  height: 100%;
  @media (max-width: 1300px) {
    transform: translateX(15%);
  }
  @media (max-width: 1024px) {
    transform: translateX(33%);
  }
  @media (max-width: 768px) {
    transform: translateX(50%);
  }
  @media (max-width: 575px) {
    transform: translateX(70%);
  }
  @media (max-width: 499px) {
    transform: translateX(75%);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const AnimationLeftWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 100%;
    height: 100%;
    margin-right: auto;
    transform: translate(-225px, 0px);
    @media (max-width: 1750px) {
      transform: translate(-250px, 0px);
    }
    @media (max-width: 1550px) {
      transform: translate(-300px, 0px);
    }
  }
`;
export const AnimationRightWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    margin-left: auto;
    transform: translate(50px, 0px);
    @media (max-width: 1550px) {
      transform: translate(150px, 0px);
    }
    @media (max-width: 1350px) {
      transform: translate(300px, 0px);
    }
  }
`;
