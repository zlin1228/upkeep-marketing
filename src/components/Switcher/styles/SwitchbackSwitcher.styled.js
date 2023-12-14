import styled from 'styled-components';

const themes = {
  Light: 'background: #ffffff;',
  Neutral: 'background: #f5f6f9;',
};
export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
  margin: 0px;
  ${({ theme }) => themes[theme]}
  @media (max-width: 992px) {
    padding: 64px 0px;
  }
  @media (max-width: 499px) {
    padding: 48px 0px;
  }
`;
export const Header = styled.div`
  width: 100%;
  max-width: 1230px;
  height: auto;
  padding: 0px 30px;
  margin: 0px auto;
  @media (max-width: 992px) {
    .switcher-header {
      margin-bottom: 24px;
      h2 {
        margin-bottom: 24px;
      }
    }
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1230px;
  height: auto;
  max-height: 411px;
  padding: 0px 30px;
  margin: 0px auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 550px;
  gap: 0px 48px;
  direction: ${({ reverse }) => (reverse ? 'rtl' : 'ltr')};
  .slick-slider {
    overflow: hidden !important;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 470px;
    gap: 0px 32px;
  }
  @media (max-width: 992px) {
    display: block;
    max-height: 100%;
    cursor: grab;
    .img-slider {
      display: none;
    }
  }
`;
export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 411px;
  border-radius: 16px;
  overflow: hidden;
  img {
    object-fit: cover !important;
  }
  @media (max-width: 992px) {
    margin-bottom: 32px;
  }
  @media (max-width: 675px) {
    height: 311px;
  }
  @media (max-width: 575px) {
    height: 260px;
  }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 12px;
`;
