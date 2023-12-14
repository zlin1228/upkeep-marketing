import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  min-height: 531px;
  background: #e6f2ff;
  border-radius: 0px 0px 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 96px;
`;
export const BreadcrumbsWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0px auto 70px auto;
  padding: 0px 15px;
  .breadcrumbs_container {
    width: 100%;
    max-width: 100%;
    padding: 0px;
    margin: 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 801px;
  height: auto;
  min-height: 221px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 15px;
  margin: 0px auto;
  h1 {
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: #0b1a2b;
    margin-bottom: 36px;
  }
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #0b1a2b;
  }
  span,
  a {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #0b1a2b;
  }
  a {
    text-decoration-line: underline;
  }
`;
