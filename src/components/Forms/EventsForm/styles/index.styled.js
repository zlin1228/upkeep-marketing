import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: auto;
`;
export const Heading = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`;
export const Subhead = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #515667;
  margin-bottom: 24px;
`;
export const Policy = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #515667;
  margin: 16px 0px 16px;
`;
export const Button = styled.button`
  display: block;
  width: 100%;
  height: 44px;
  background: #007bff;
  color: white;
  padding: 0px;
  margin: 0px;
  border: none;
  outline: none;
  border-radius: 6px;
  transition: all 250ms ease-in-out;
  white-space: nowrap;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.5px;
  &:hover {
    background: #1f47cd;
    color: white;
  }
`;
