import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';

export const Wrapper = styled.div`
  position: relative;
  width: auto;
  height: auto;

  .slider-icon {
    position: absolute;
    top: 16px;
    right: 24px;
  }
`;

export const Select = styled.select`
  position: relative;
  appearance: none;
  width: 100%;
  min-width: 270px;
  min-height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 48px 8px 24px;
  background: transparent;
  border: 1px solid #eaeaec;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  ${font('text', 'lg', '700')}
  color: ${color.darkBlue[1000]};
`;
