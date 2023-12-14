import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 617px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px auto;
`;
const statColor = {
  0: 'color: white;',
  1: 'color: #007bff;',
  2: 'color: #4945FB;',
};
export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .social-reviews {
    display: none;
  }
  div {
    p {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: #0b1a2b;
      @media (max-width: 499px) {
        font-size: 12px;
      }
    }
  }
`;
export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 51px;
  width: fit-content;
  margin-bottom: 12px;
  @media (max-width: 499px) {
    min-height: 40px;
    .social-star-icon {
      margin-right: 4.5px;
      font-size: 14px;
    }
  }
  strong,
  p {
    width: fit-content;
    height: auto;
    padding: 0px;
    margin: 0px;
    display: block;
  }
  strong {
    font-size: 31.1px;
    text-align: center;
    ${props => statColor[props.color]}
    @media(max-width: 499px) {
      font-size: 20px;
      margin: 0px;
    }
  }
`;
