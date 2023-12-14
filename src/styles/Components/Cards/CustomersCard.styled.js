import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { shadow } from '../../../atoms/shadows';

export const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${color.common.neutral};
  border-radius: 8px;
  overflow: hidden;
  transition: all 250ms ease-in-out;
  &:hover {
    background: ${color.common.white};
    ${shadow('lg', 'dark')}
    .hovered:before {
      top: 50%;
    }
  }
`;
export const Image = styled.div`
  position: relative;
  width: 100%;
  min-height: 209px;
  overflow: hidden;
  .gatsby-image {
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
  }
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  padding: 24px;
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .heading-kicker {
    ${font('overline', 'lg', '600')}
    color: ${color.darkGrey[500]};
  }
  .heading {
    ${font('display', 'xs', '700')}
    color: ${color.darkBlue[900]};
  }
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[700]};
  }
`;
