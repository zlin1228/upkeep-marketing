import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 121px 0px 96px;
  background: linear-gradient(
    83.12deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(222, 24, 36, 0.1) 99.84%
  );
`;
export const OuterWrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  height: auto;
  margin: 0px auto;
  padding: 0px 35px;
  @media (max-width: 499px) {
    padding: 0px 15px;
  }
  nav {
    margin-bottom: 64px;
    @media (max-width: 992px) {
      margin-bottom: 32px;
    }
  }
`;
export const InnerWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 470px 1fr;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media (max-width: 992px) {
    max-width: 570px;
    grid-template-columns: 1fr;
    margin: 0px auto;
  }
`;
export const Text = styled.div`
  width: 100%;
  height: auto;
  @media (max-width: 992px) {
    text-align: center;
  }
`;
export const HeadingKicker = styled.h5`
  ${font('overline', 'lg', '700')}
  color: ${color.primary[700]};
  margin-bottom: 16px;
`;
export const Heading = styled.div`
  ${font('display', 'sm', '700')}
  color: ${color.darkBlue[900]};
  margin-bottom: 16px;
  ${atMinWidth.lg`
    ${font('display', 'md', '700')}
    margin-bottom: 16px;
 `}
  ${atMinWidth.xl`
    ${font('display', 'lg', '700')}
    margin-bottom: 16px;
 `}
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 56px;
    color: #0d141a;
    margin-bottom: 0px;
    @media (max-width: 992px) {
      font-size: 36px;
      line-height: 48px;
    }
    @media (max-width: 576px) {
      font-size: 26px;
      line-height: 32px;
    }
  }
`;
export const Subhead = styled.div`
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
  margin-bottom: 32px;
  ${atMinWidth.lg`
    ${font('text', 'lg', '400')}
    margin-bottom: 32px;
 `}
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 0px;
    @media (max-width: 992px) {
      font-size: 16px;
      line-height: 150%;
    }
  }
`;
export const Video = styled.div`
  width: 100%;
  height: auto;
  border-radius: 16px;
  overflow: hidden;
  @media (max-width: 992px) {
    border-radius: 12px;
  }
`;
