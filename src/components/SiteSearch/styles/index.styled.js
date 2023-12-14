import styled, { css } from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Modal = styled.div`
  position: fixed;
  inset: 0px;
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(111, 126, 140, 0.22);
  backdrop-filter: blur(4px);
  transition: opacity 250ms ease-in-out 0s, visibility 250ms ease-in-out 0s;
  z-index: 9999;

  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  ${atMinWidth.md`
    width: 840px;
    height: 621px;
    padding: ${spacing[20]};
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: ${spacing[24]};
  background: ${color.common.white};
  border: 1px solid ${color.darkBlue[50]};
  box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);

  ${atMinWidth.md`
    border-radius: ${spacing[8]};
  `}
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${spacing[16]};
  padding: ${spacing[0]} ${spacing[16]} ${spacing[0]};

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]} ${spacing[0]};
  `}
`;

export const Content = styled.div`
  width: calc(100% - 4px);
  height: 100%;
  padding: ${spacing[32]} ${spacing[16]} ${spacing[64]};
  overflow: scroll;

  ${atMinWidth.md`
    padding: ${spacing[32]} ${spacing[32]} ${spacing[0]} ${spacing[32]};
    ${({ renderSearchResults }) => renderSearchResults && `overflow: scroll;`}
  `}

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${color.darkBlue[50]};
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing[24]};
  padding: ${spacing[16]} ${spacing[32]};
  background-color: ${color.common.white};
  border-top: 1px solid ${color.darkBlue[50]};
  border-bottom-left-radius: ${spacing[8]};
  border-bottom-right-radius: ${spacing[8]};

  ${atMinWidth.md`
    position: relative;
    bottom: auto;
  `}
`;

export const CloseButton = styled.button`
  display: none;

  ${atMinWidth.md`
    position: absolute;
    top: -20px;
    right: -20px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${spacing[32]};
    padding: ${spacing[8]};
    background: ${color.common.white};
    border: 1px solid ${color.darkBlue[50]};
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
        0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    border-radius: ${spacing[48]};

    &:hover {
        background: ${color.common.white};
        border: 1px solid ${color.darkBlue[50]};
    }
  `}
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing[4]} ${spacing[10]};
  background: ${color.common.white};
  border: 1px solid ${color.darkBlue[1000]};
  color: ${color.darkBlue[1000]};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: ${spacing[72]};
  ${font('display', 'tiny-xs', '700')}

  &:hover {
    background: ${color.common.white};
    border: 1px solid ${color.darkBlue[1000]};
    color: ${color.darkBlue[1000]};
  }

  ${atMinWidth.md`
    opacity: 0;
    pointer-events: none;
  `}
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[8]};
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
`;

export const List = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  gap: ${spacing[32]};

  ${props =>
    props.render &&
    `
    display: flex;
  `}

  .search-block:last-child {
    border-bottom: none;
  }
`;
