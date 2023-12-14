import { Link } from 'gatsby';
import styled from 'styled-components';
import { shadow } from '../../../atoms/shadows';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Container = styled.div`
  position: absolute;
  top: ${props => (props.size === 'lg' ? '64px' : '40px')};
  left: 0px;
  right: 0px;
  width: 100%;
  height: auto;
  background: #ffffff;
  z-index: 1000;
  ${shadow('xs', 'dark')}
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: none;
`;
export const Result = styled(Link)`
  display: block;
  width: 100%;
  height: auto;
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
  ${props =>
    props.size === 'lg' ? 'padding: 12px 24px;' : 'padding: 8px 14px;'};
  border-bottom: 1px solid ${color.darkBlue[50]};
  transition: all 250ms ease-in-out;
  &.active,
  &:focus,
  &:hover {
    color: ${color.darkGrey[900]};
    background: ${color.darkGrey[50]};
    ${font('text', 'md', '600')}
  }
  &:first-child {
    border-top: 1px solid ${color.darkBlue[50]};
  }
  &:last-child {
    margin-bottom: 0px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom: none;
  }
`;
export const Text = styled.div`
  width: 100%;
  ${font('text', 'md', '500')}
  color: ${color.darkBlue[900]};
  border-top: 1px solid ${color.darkBlue[50]};
  ${props =>
    props.size === 'lg' ? 'padding: 12px 24px;' : 'padding: 8px 14px;'};
`;
