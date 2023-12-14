import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  min-height: 600px;
  padding: 0px;
  margin: 0px;
  background: linear-gradient(101.74deg, #2200c7 9.73%, #4845fb 87.02%),
    linear-gradient(101.74deg, #1f47cd 9.73%, #1269ec 87.02%);
  border-radius: 0px 0px 128px 0px;
  @media (max-width: 575px) {
    min-height: 665px;
    border-radius: 0px;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1230px;
  height: 100%;
  margin-bottom: 40px;
  padding: 0px 15px;
`;
export const OuterWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 575px) {
    min-height: 665px;
  }
`;
export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 0px auto;
  padding: 0px 15px;
  @media (max-width: 992px) {
    max-width: 570px;
  }
  @media (max-width: 575px) {
    max-width: 510px;
  }
`;
export const HeadingKicker = styled.h5`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 24px;
`;
export const Heading = styled.h1`
  font-weight: bold;
  font-size: 64px;
  line-height: 72px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 24px;
  @media (max-width: 575px) {
    font-size: 44px;
    line-height: 56px;
  }
  @media (max-width: 499px) {
    font-size: 36px;
    line-height: 48px;
  }
`;
export const Subhead = styled.div`
  font-weight: normal;
  font-size: 21.6px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 24px;
`;
export const Buttons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 575px) {
    flex-direction: column;
  }
  a {
    width: auto;
    height: auto;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    padding: 12px 24px;
    border-radius: 4px;
    margin: 0px 12px;
    @media (max-width: 575px) {
      margin: 0px 0px 24px;
    }
  }
`;
