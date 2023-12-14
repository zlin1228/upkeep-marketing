import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { shadow } from '../../../atoms/shadows';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  background: linear-gradient(
    180deg,
    ${color.primary[25]} 92.5%,
    ${color.common.white} 20%
  );
  ${atMinWidth.md`
    padding-top: 140px;
    background: linear-gradient(
      180deg,
      ${color.primary[25]} 70%,
      ${color.common.white} 30%
    );
  `}
  ${atMinWidth.lg`
    gap: 74px;
    background: linear-gradient(
      180deg,
      ${color.primary[25]} 75%,
      ${color.common.white} 25%
    );
  `}
  ${atMinWidth.xl`
    background: linear-gradient(
      180deg,
      ${color.primary[25]} 75%,
      ${color.common.white} 25%
    );
  `}
`;
export const Wrapper = styled.div`
  width: 100%;
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 23.5px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
  `}
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${atMinWidth.lg`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  `}
  .heading {
    ${font('display', 'sm', 700)}
    text-align: left;
    color: ${color.darkBlue[900]};
    ${atMinWidth.md`
      ${font('display', 'md', 700)}
    `}
    ${atMinWidth.xl`
      ${font('display', 'xl', 700)}
      text-align: left;
    `}
  }
  .subhead-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .subhead {
    display: flex;
    flex-direction: column;
    gap: 32px;
    ${font('text', 'md', 400)}
    text-align: left;
    color: ${color.darkBlue[600]};
    ${atMinWidth.xl`
      ${font('text', 'lg', 400)}
    `}
    p {
      ${font('text', 'md', 400)}
      color: ${color.darkBlue[600]};
      text-align: left;
      ${atMinWidth.xl`
        ${font('text', 'lg', 400)}
      `}
    }
  }
  .call-to-action {
    width: 100%;
    justify-content: center;
    text-align: center;
    ${atMinWidth.sm`
      width: fit-content;
    `}
  }
`;
export const Grid = styled.div`
  width: 100%;
  max-width: 840px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px 4.5px;
  padding: 0px 23.5px;
  margin: 0px auto;
  ${atMinWidth.xs`
    gap: 0px 9px;
  `}
  ${atMinWidth.sm`
    padding: 0px 35px;
    `}
  ${atMinWidth.xl`
    max-width: 1240px;
    grid-template-columns: repeat(4, 1fr);
    gap: 0px 16px;
  `}
  .image:nth-child(even) {
    margin-top: 0px;
    ${atMinWidth.sm`
      margin-top: 40px;
    `}
  }
  .image:nth-child(2),
  .image:nth-child(4) {
    margin-top: 12px;
    ${atMinWidth.lg`
      margin-top: 32px;
    `}
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 112px;
  border-radius: 4.5px;
  overflow: hidden;
  box-shadow: 0px 0px 60px rgba(8, 26, 40, 0.2);
  ${atMinWidth.xs`
    height: 180px;
  `} ${atMinWidth.md`
    height: 230px;
  `} ${atMinWidth.lg`
    height: 260px;
    border-radius: 11px;
  `} ${atMinWidth.xl`
    height: 396px;
    border-radius: 16px;
  `} .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
