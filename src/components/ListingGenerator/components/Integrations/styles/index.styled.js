import styled from 'styled-components';

import { font } from '../../../../../atoms/typography';
import { color } from '../../../../../atoms/colors';

export const Section = styled.section`
  width: 100%;
  height: auto;
  background: #ffffff;
  padding: 64px 35px 0px;
  @media (max-width: 992px) {
    padding: 64px 35px 0px;
  }
`;
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 100%;
  max-width: 666px;
  height: auto;
  margin: 0px auto 72px auto;
  h2 {
    ${font('display', 'lg', '700')}
    color: ${color.darkBlue[900]};
    text-align: center;
    margin-bottom: 24px;
  }
  p {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
    text-align: center;
    margin-bottom: 24px;
  }
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: auto;
  grid-column-gap: 130px;
  padding: 0px;
  width: 100%;
  max-width: 1170px;
  height: auto;
  margin: 0px auto 72px auto;
  @media (max-width: 1200px) {
    max-width: 100%;
    grid-column-gap: 107px;
  }
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    max-width: 770px;
  }
`;
export const Container = styled.div`
  .details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    width: 100%;
    height: auto;
    margin-bottom: 24px;
    h6,
    p {
      margin: 0px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      h6,
      p {
        margin-bottom: 8px;
      }
    }
  }
`;
export const Grid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 30px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
