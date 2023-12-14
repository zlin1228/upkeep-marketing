import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: auto;
  height: auto;
  svg {
    position: absolute;
    top: 16px;
    right: 24px;
  }
`;
export const Select = styled.select`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 48px 8px 24px;
  width: 100%;
  height: auto;
  min-height: 42px;
  background: transparent;
  border: 1px solid #eaeaec;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  cursor: pointer;

  font-style: normal;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #0d141a;
`;
