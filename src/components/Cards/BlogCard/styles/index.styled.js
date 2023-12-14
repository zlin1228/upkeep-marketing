import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { shadow } from '../../../../atoms/shadows';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${color.common.neutral};
  border-radius: 12px;
  overflow: hidden;
  transition: all 250ms ease-in-out;
  &:hover {
    background-color: ${color.common.white};
    ${shadow('lg', 'dark')}
  }
`;
export const Image = styled.div`
  width: 100%;
  .gatsby-image-wrapper {
    width: 100%;
    aspect-ratio: 16/9;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  padding: 24px;
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .heading-kicker {
    ${font('overline', 'md', 700)}
    color: ${color.mediumGrey[300]};
  }
  .heading {
    ${font('display', 'xs', 700)}
    color: ${color.darkBlue[900]};
  }
  .subhead {
    ${font('text', 'md', 400)}
    color: ${color.darkBlue[600]};
  }
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .author {
    margin: 0px;
  }
  .publish-date {
    ${font('text', 'sm', 400)}
    color: ${color.darkBlue[900]};
  }
`;
