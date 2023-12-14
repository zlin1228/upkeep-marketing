import styled from 'styled-components';
import HeroBg from '../../../assets/background/learning-detail-bg.png';
import { font } from '../../../atoms/typography';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 38px 0px 96px;
  background: url(${HeroBg}) no-repeat center center;
  @media (max-width: 992px) {
    min-height: auto;
    padding-bottom: 64px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1260px;
  height: auto;
  padding: 0px 30px;
  margin: 0px auto;
`;
export const Column = styled.div`
  width: 100%;
  max-width: 770px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 41px;
  margin: 0px auto;
  h1 {
    ${font('display', 'lg', '700')}
    text-align: center;
    color: #0d141a;
    @media (max-width: 992px) {
      ${font('display', 'md', '700')}
    }
    @media (max-width: 576px) {
      ${font('display', 'sm', '700')}
    }
  }
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;
export const Badge = styled.a`
  width: max-content;
  height: auto;
  padding: 4px 8px;
  margin: 0px 8px 12px 0px;
  border: 1px solid #95a0b4;
  border-radius: 100px;
  ${font('overline', 'sm', '700')}
  color: #95a0b4;
  cursor: pointer;
  &:hover {
    color: #95a0b4;
  }
`;
