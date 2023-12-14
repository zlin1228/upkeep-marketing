import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  background: ${color.darkGrey[50]};
  padding: 48px 0px 48px;
  ${({ updatePaddingTop }) => updatePaddingTop && `padding-top: 128px;`}
  ${({ updatePaddingBottom }) => updatePaddingBottom && `padding-bottom: 0;`}
  ${atMinWidth.md`
    padding: 64px 0px 64px;
    ${({ updatePaddingTop }) => updatePaddingTop && `padding-top: 128px;`}
    ${({ updatePaddingBottom }) => updatePaddingBottom && `padding-bottom: 0;`}
    `}
  ${atMinWidth.xl`
    padding: 96px 0px 96px;
    ${({ updatePaddingTop }) => updatePaddingTop && `padding-top: 128px;`}
    ${({ updatePaddingBottom }) => updatePaddingBottom && `padding-bottom: 0;`}
  `}
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 0px 23.5px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
  `}
`;
export const Header = styled.div`
  width: 100%;
  max-width: 970px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0px auto;
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
    text-align: center;
    ${atMinWidth.xl`
      ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
    text-align: center;
    p {
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[600]};
      text-align: center;
    }
  }
`;
export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${atMinWidth.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 31px;
  `}
  ${atMinWidth.xl`
    grid-template-columns: repeat(3, 1fr);
  `}
`;
