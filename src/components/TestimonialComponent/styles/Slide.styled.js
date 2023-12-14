import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(224, 230, 237);
  padding: 24px;
  @media (max-width: 768px) {
    min-height: 250px;
  }
`;
export const Details = styled.div`
  width: 100%;
  height: auto;
`;
export const Rating = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  .social-stars {
    margin: 0px;
  }
  .social-star-icon {
    font-size: 18px;
  }
  .social-reviews {
    display: none;
  }
`;
export const Title = styled.div`
  width: 100%;
  height: auto;
  color: #707481;

  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 16px;
`;
export const Quote = styled.div`
  width: 100%;
  height: auto;
  color: #707481;

  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 16px;
`;
export const Source = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  color: rgb(51, 57, 75);
  font-weight: 600;
  font-size: 13.5px;
  line-height: 16px;
  img {
    width: 14px;
    height: 14px;
    object-fit: contain;
    margin-right: 12px;
  }
`;
