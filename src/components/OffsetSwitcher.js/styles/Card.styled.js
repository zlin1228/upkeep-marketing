import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Frame = styled.button`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  text-align: start;
  border: 1px solid transparent;
  &:focus {
    cursor: pointer;
    background: #ffffff;
    box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
    border: 1px solid transparent;
    outline: none;
    border-radius: 8px;
  }
  &:active {
    cursor: pointer;
    background: #ffffff;
    box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
    border: none;
    outline: none;
    border-radius: 8px;
  }
  &:hover {
    background: #fafbfc;
    border: 1px solid #eceef6;
    box-sizing: border-box;
    border-radius: 8px;
  }
  @media (max-width: 576px) {
    height: auto;
    min-width: 285px;
    padding: 24px;
    background: #fafbfc;
    border: 1px solid #eceef6;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 0px 12px 0px 12px;
  }
`;

export const CardHeading = styled.h4`
  color: ${color.darkBlue[900]};
  ${font('display', 'xs', '700')}
  margin-left: 8px;
  @media (max-width: 577px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const Subhead = styled.p`
  color: ${color.darkBlue[600]};
  ${font('text', 'lg', '400')};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 34px;
  min-height: 31px;
  background: ${color.primary[700]};
  border-radius: 8px;
  svg {
    color: #fff;
  }
`;
