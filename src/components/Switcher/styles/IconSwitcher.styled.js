import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
  margin: 0px;
  @media (max-width: 992px) {
    padding: 64px 0px;
  }
  @media (max-width: 499px) {
    padding: 48px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1230px;
  height: auto;
  padding: 0px 30px;
  margin: 0px auto;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 30px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  .switcher-slide {
    width: 100%;
    max-width: 670px;
    height: 100%;
    margin-left: 30px;
    ${props => (props.reverse ? 'margin-right: 30px;' : 'margin-left: 30px;')};
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    ${props =>
      props.reverse
        ? 'flex-direction: column;'
        : 'flex-direction: column-reverse;'};
    max-width: 770px;
    padding: 0px;
    .switcher-slide {
      max-width: 570px;
      margin: 0px 0px 48px 0px;
      ${props =>
        props.reverse
          ? 'margin: 48px 0px 0px 0px;'
          : 'margin: 0px 0px 48px 0px;'};
    }
  }
`;
