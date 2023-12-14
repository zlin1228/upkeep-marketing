import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
  @media (max-width: 992px) {
    flex-direction: row-reverse;
    width: 100%;
    min-height: 390px;
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    width: 90%;
    padding: 56px 0px;
  }
  @media (max-width: 576px) {
    padding-top: 0;
    padding-bottom: 48px;
  }
`;

export const Heading = styled.h5`
  color: ${color.darkBlue[900]};
  ${font('display', 'xs', '700')}
  margin-top: 32px;
`;

export const Text = styled.p`
  color: ${color.darkBlue[600]};
  ${font('text', 'lg', '400')}
  margin-bottom: 16px;
`;

export const ImgWrapper = styled.div`
  width: 100%;
`;

export const Img = styled.img`
  height: auto;
  max-width: 100%;
`;

export const Link = `
  width: fit-content;
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  color: ${color.primary[900]};
  &:hover {
    color: ${color.primary[900]};
  }
  &:after {
    position: absolute;
    content: '';
    top: 50%;
    margin: auto;
    right: -16px;
    transform: translateY(-50%) rotate(45deg);
    transform-origin: bottom;
    width: 6px;
    height: 6px;
    border-top: 2px solid ${color.primary[900]};
    border-right: 2px solid ${color.primary[900]};
    transition: all 0.3s ease;
  }
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: calc(100% + 13px);
    width: 0;
    opacity: 0;
    border-bottom: 2px solid ${color.primary[900]};
  }
`;
