import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
  background: #f5f6f9;
  border-radius: 16px;
  padding: 16px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  z-index: 1;
  ${props => props?.styles}
`;
export const Button = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 16px 12px;
  &:focus {
    outline: none;
  }
  &:hover {
    background: none;
  }
`;
export const Text = styled.span`
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #7e828a;
  z-index: 2;
  transition: color 300ms ease-in-out;
  ${props => props?.activeTab === props?.orientation && `color: #ffffff;`}
  svg {
    margin-right: 10px;
  }
`;
export const Cover = styled(motion.div)`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  background: #0d141a;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: -1;
  pointer-events: none;
`;
