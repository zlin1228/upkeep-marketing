import styled from 'styled-components';
import { richTextStyles } from '../../atoms/typography';

export const Main = styled.main`
  width: auto;
  height: auto;
  padding: 80px 0px 0px;
  margin: 0px;
`;
export const Section = styled.section`
  width: 100%;
  padding: 64px 0px 96px;
  @media (max-width: 992px) {
    padding: 0px 0px 64px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1230px;
  height: auto;
  padding: 0px 30px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 300px 1fr;
  justify-content: space-between;
  gap: 101px;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 0px;
  }
`;
export const Sidebar = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: max-content;
  .social-links-container {
    h4 {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #101828;
      margin-bottom: 8px;
    }
    a {
      margin-right: 16px;
    }
  }
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse;

    .toc {
      display: none !important;
    }
    .subscription_card {
      margin: 0px;
    }
    .social-links-container {
      margin: 0px 0px 64px;
    }
  }
`;
export const Content = styled.div`
  width: 100%;
  max-width: 770px;
  margin: 0px;
  @media (max-width: 1200px) {
    margin-right: 30px;
  }
  @media (min-width: 993px) {
    .mobile-toc {
      display: none;
    }
  }
  @media (max-width: 992px) {
    max-width: 100%;
    margin: 0px 0px 48px;
  }
  .post {
    &,
    & div {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    ${richTextStyles}
  }
`;
