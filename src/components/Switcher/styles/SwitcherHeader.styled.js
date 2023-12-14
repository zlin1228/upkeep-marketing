import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  max-width: 970px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  margin: 0px auto 64px;
`;
export const HeadingKicker = styled.h5`
  ${font('overline', 'lg', '600')};
  color: ${color.primary[600]};
  margin-bottom: 8px;
`;
export const Heading = styled.h2`
  ${font('display', 'lg', '700')};
  color: color: ${color.darkBlue[900]};
  margin-bottom: 8px;
  @media (max-width: 768px) {
    ${font('display', 'md', '700')};
  }
`;
export const Subhead = styled.p`
  ${font('text', 'lg', '400')};
  text-align: center;
  color: color: color: ${color.darkBlue[600]};
  margin-bottom: 24px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  .heading-kicker {
    ${font('overline', 'lg', '600')};
    color: ${color.primary[700]};
  }
  .heading {
    ${font('display', 'md', '700')};
    color: color: ${color.darkBlue[900]};
    ${atMinWidth.md`
      ${font('display', 'lg', '700')};
    `}
  }
  .subhead {
    ${font('text', 'md', '400')};
    color: ${color.darkBlue[600]};
    ${atMinWidth.md`
      ${font('text', 'lg', '400')};
    `}
  }
`;
export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  margin: 0px auto;
  a:first-child {
    width: 100%;
  }
  ${atMinWidth.xs`
    width: fit-content;
    flex-direction: row;
    a:first-child {
      width: fit-content;
    }
  `}
`;
