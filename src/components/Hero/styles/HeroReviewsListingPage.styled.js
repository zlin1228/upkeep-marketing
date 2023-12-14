import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding: 112px 0px 64px;
  background: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0) 76.36%),
    rgba(255, 234, 238, 0.7);
  ${atMinWidth.xl`
        padding: 122px 0px 96px;
    `}
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px 24px;
  margin: 0px auto;
  ${atMinWidth.sm`
        padding: 0px 35px;
    `}
  ${atMinWidth.xl`
        max-width: 1240px;
    `}
  nav {
    margin-bottom: 16px;
  }
`;
export const Text = styled.div`
  width: 100%;
  max-width: 570px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  ${atMinWidth.xl`
      max-width: 770px;
      gap: 32px;
  `}
  .heading-kicker {
    ${font('overline', 'lg', '700')}
    color: ${color.primary[700]};
  }
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
    ${atMinWidth.xl`
        ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
    ${atMinWidth.xl`
        ${font('text', 'xl', '400')}
    `}
    p {
      ${font('text', 'lg', '400')}
      color: ${color.darkBlue[600]};
      ${atMinWidth.xl`
        ${font('text', 'xl', '400')}
      `}
    }
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 570px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 32px 28px;
  margin: 0px auto;
  .desktop-rating {
    display: none;
  }
  .mobile-rating {
    display: flex;
  }

  ${atMinWidth.md`
    justify-content: space-between;
    gap: 0px;
    .desktop-rating {
        display: flex;
    }
    .mobile-rating {
        display: none;
    }
  `}
  ${atMinWidth.xl`
    max-width: 770px;
  `}
`;
