import styled from 'styled-components';

export const ReviewBar = styled.div`
  width: 100%;
  height: auto;
  background: transparent;
  padding: 50px 15px;
  border-bottom: 2px solid #e6f2ff;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  height: auto;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
export const Review = styled.div`
  width: auto;
  height: auto;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 48px;
  }
`;
export const ReviewLogo = styled.img`
  width: auto;
  max-height: 100%;
  object-fit: contain;
  margin-right: 8px;
  @media (max-width: 991px) {
    max-height: 41px;
    margin: 0px 0px 8px 0px;
  }
`;
export const ReviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  p {
    width: 100%;
    height: auto;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #00254c;
    margin: 0px;
    white-space: nowrap;
    @media (max-width: 991px) {
      text-align: center;
    }
  }
`;
export const ReviewStars = styled.div`
  display: flex;
  margin-bottom: 4px;
  @media (max-width: 991px) {
    justify-content: center;
    margin: 6px 0px;
  }
  svg {
    margin-right: 4.5px;
  }
`;
