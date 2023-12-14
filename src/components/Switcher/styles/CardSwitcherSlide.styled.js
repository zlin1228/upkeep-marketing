import styled from 'styled-components';
import { motion } from 'framer-motion';
import CheckSvg from '../../../assets/check.svg';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: auto;
  padding: 15px;
  @media (max-width: 991px) {
    padding: 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #eaeaec;
  border-radius: 16px;
  padding: 32px 0px;
  margin: 0px;
  transition: all 300ms ease-in-out;
  &:hover {
    box-shadow: 0px 2px 15px 2px rgba(10, 16, 34, 0.1);
  }
  @media (max-width: 499px) {
    padding: 32px 10px;
  }
  .clickable {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0px;
    z-index: 1000;
  }
  a {
    width: calc(100% - 64px);
    margin: 0px auto;
    text-align: center;
  }
  ${atMinWidth.xl`
    a {
      width: fit-content;
    }  
  `}
`;
export const Icon = styled.div`
  width: 62px;
  height: 62px;
  background: ${color.primary[50]};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;
export const Heading = styled.h3`
  ${font('display', 'md', '700')};
  color: color: ${color.darkBlue[900]};
  margin-bottom: 8px;
  text-align: center;
`;
export const Subhead = styled.p`
  ${font('text', 'md', '400')};
  color: color: ${color.darkBlue[600]};
  text-align: center;
  color: #707481;
  margin-bottom: 32px;
  padding: 0px 15px;
`;
export const Features = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 32px 0px;
  border-top: 1px solid #eaeaec;
  margin-bottom: 16px;
  text-transform: none;
  @media (max-width: 499px) {
    padding: 16px;
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  ul li {
    position: relative;
    display: flex;
    align-items: flex-start;
    ${font('text', 'md', '400')};
    color: color: ${color.darkBlue[600]};
    margin-bottom: 16px;
  }
  ul li::before {
    content: '';
    width: 20px;
    min-width: 20px;
    height: 20px;
    min-height: 20px;
    margin-right: 10px;
    border-radius: 100px;
    background: ${color.primary[500]};
    transform: translateY(2px);

  }
  ul li::after {
    content: url(${CheckSvg});
    position: absolute;
    transform: translate(5px, 0px);
  }
  p {
    ${font('text', 'md', '400')};
    color: color: ${color.darkBlue[600]};
    margin: 16px 0px;
  }
  h5, h5 strong {
     ${font('display', 'sm', '700')};
    text-transform: none;
  }
`;
