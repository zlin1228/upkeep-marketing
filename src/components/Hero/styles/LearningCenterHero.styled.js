import styled from 'styled-components';
import LearningDesktopBg from '../../../assets/background/learning-center-bg-desktop.png';
import LearningTabletBg from '../../../assets/background/learning-center-bg-tablet.png';
import LearningMobileBg from '../../../assets/background/learning-center-bg-mobile.png';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 176px 0px 40px;
  background-color: #fafcff;
  background: url(${LearningDesktopBg}) no-repeat center center;
  background-size: cover;
  @media (max-width: 992px) {
    background: url(${LearningTabletBg}) no-repeat center center;
    padding: 120px 0px 40px;
  }
  @media (max-width: 576px) {
    background: url(${LearningMobileBg}) no-repeat center center;
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
  height: auto;
  padding: 0px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    font-weight: 700;
    font-size: 3.556rem;
    line-height: 4rem;
    color: #33394b;
    span {
      color: #007bff;
    }
    @media (max-width: 992px) {
      font-size: 3rem;
      line-height: 3.5rem;
    }
    @media (max-width: 575px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #515667;
    margin-bottom: 32px;
  }
  h5,
  h1 {
    margin-bottom: 16px;
  }
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(141, 208, 255, 0.25);
  border-radius: 9999px;
  margin-bottom: 16px;
`;
