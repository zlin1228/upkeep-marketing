import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { shadow } from '../../../atoms/shadows';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Frame = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background: ${color.common.neutral};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: translateZ(0);
  transition: all 250ms ease-in-out;
  &:hover {
    background: ${color.common.white};
    ${shadow('xxl', 'dark')}
  }
  .clickable {
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
`;
export const Image = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  margin: 0px;
  overflow: hidden;
  transform: translateZ(0);
  ${atMinWidth.md`
    min-height: 208px;
  `} ${atMinWidth.lg`
    min-height: 190px;
  `} ${atMinWidth.xl`
    min-height: 208px;
  `} .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export const Body = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  .author {
    margin-top: 8px;
  }
`;
export const Details = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const Tags = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 0px;
  margin-bottom: 8px;
  strong {
    display: block;
    width: fit-content;
    height: auto;
    ${font('overline', 'sm', '700')}
    margin-right: 24px;
  }
  strong:first-child {
    color: ${color.primary[700]};
  }
  strong:last-child {
    color: ${color.mediumGrey[600]};
    margin: 0px;
  }
`;
export const Title = styled.p`
  width: 100%;
  height: auto;
  color: ${color.darkBlue[900]};
  ${font('display', 'xs', '700')}
  margin-bottom: 8px;
`;
export const Excerpt = styled.div`
  width: 100%;
  height: auto;
  color: ${color.darkBlue[700]};
  ${font('text', 'md', '400')}
  margin-bottom: 8px;
  p {
    color: ${color.darkBlue[700]};
    ${font('text', 'md', '400')}
    margin-bottom: 0px;
  }
`;
