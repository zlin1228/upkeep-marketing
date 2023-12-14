import styled from 'styled-components';
import { atMinWidth } from '../../../atoms/breakpoints';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import BackgroundXl from '../assets/support-page-bg-xl.png';
import BackgroundLg from '../assets/support-page-bg-lg.png';
import BackgroundMd from '../assets/support-page-bg-md.png';
import BackgroundSm from '../assets/support-page-bg-sm.png';

export const Section = styled.section`
  width: 100%;
  padding: 86px 0px 96px;
  background: linear-gradient(
    83.82deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 130, 138, 0.15) 99.49%
  );

  /* background-image: url(${BackgroundSm});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  ${atMinWidth.sm`
    background-image: url(${BackgroundMd})
  `}
  ${atMinWidth.md`
    background-image: url(${BackgroundLg})
  `} */
  ${atMinWidth.xl`
    // background-image: url(${BackgroundXl});
    padding: 118px 0px 96px;
  `}
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 870px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 0px 24px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.md`
    gap: 72px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
  `}
`;
export const Container = styled.div`
  width: 100%;
  max-width: 783px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 0px auto;
  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.common.black};
    ${atMinWidth.sm`
        ${font('display', 'md', '700')}
    `}
    ${atMinWidth.md`
        ${font('display', 'lg', '700')}
    `}
  }
`;
export const Text = styled.p`
  width: 100%;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  ${font('text', 'lg', '700')}
  color: ${color.common.black};
  a {
    ${font('text', 'lg', '400')}
    color: ${color.common.black};
    text-decoration: underline;
  }
`;
