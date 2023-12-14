import styled from 'styled-components';
import { shadow } from '../../../../atoms/shadows';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const AlertWrapper = styled.div`
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 90%;
  background: linear-gradient(101.24deg, #000714 27.61%, #262c36 103.49%);
  color: #fff;
  padding: 16px 32px;
  box-shadow: 0px 8px 56px rgba(8, 26, 40, 0.15);
  border-radius: 12px;
  z-index: 10000;
  ${atMinWidth.sm`
   width: max-content;
  `}
  ${atMinWidth.md`
   flex-direction: row;
   align-items: unset;
   gap: 40px;
   text-align: left;
  `}
`;
export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Heading = styled.p`
  font-family: 'Open Sans' !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 15px !important;
  line-height: 130% !important;
  color: ${color.common.white};
  margin-bottom: 0px !important;
`;

export const Subhead = styled.p`
  font-weight: 600 !important;
  font-size: 18px !important;
  line-height: 24px !important;
  color: ${color.common.white};
  margin-bottom: 0px !important;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background: ${color.primary[700]};
  color: ${color.common.white};
  border: 2px solid ${color.primary[700]};
  opacity: 1;
  padding: 10px 18px;
  border-radius: 5px;
  &:hover {
    background: ${color.primary[400]};
    color: ${color.common.white};
    border: 2px solid ${color.primary[400]};
    ${shadow('xs', 'dark')};
  }
  &:focus {
    background: ${color.primary[700]};
    color: ${color.common.white};
    border: 2px solid ${color.darkGrey[200]};
    outline: 2px solid ${color.darkGrey[200]};
    ${shadow('xs', 'dark')};
  }
  &.disabled {
    background: ${color.primary[100]};
    border: 2px solid ${color.primary[100]};
    color: ${color.mediumGrey[400]};
    ${shadow('xs', 'dark')};
    pointer-events: none;
  }
`;
