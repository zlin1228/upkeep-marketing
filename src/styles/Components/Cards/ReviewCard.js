import styled from 'styled-components';

export const Frame = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  background: #ffffff;
  border: 1px solid #eaeaec;
  border-radius: 8px;
  margin-bottom: 32px;
`;
export const Rating = styled.div`
  display: flex;
  width: 100%;
  max-width: 130px;
  height: auto;
  align-items: center;
  justify-content: space-between;
`;
export const Details = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eaeaec;
  padding: 24px 0px;
  margin-bottom: 24px;
`;
export const Title = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 25.92px;
  line-height: 32px;
  color: #0b1a2b;
  margin-bottom: 12px;
`;
export const Review = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #515667;
  margin-bottom: 12px;
`;
export const VideoLink = styled.button`
  position: relative;
  width: fit-content;
  height: auto;
  border: none;
  background: none;
  outline: none;

  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  color: #007bff;
  padding: 0px;
  margin: 0px 0px 12px;
  &:after {
    position: absolute;
    content: '';
    top: calc(50% - 2px);
    left: 100%;
    margin-left: 12px;
    transform: rotate(45deg);
    width: 6px;
    height: 6px;
    border-top: 2px solid;
    border-right: 2px solid;
    transition: margin-left 0.3s ease, opacity 0.1s ease 0.2s;
    border-color: #007bff;
  }
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: 100%;
    margin-left: 12px;
    width: 8px;
    border-bottom: 2px solid #007bff;
    opacity: 0;
    width: 0;
    transition: all 0.3s ease;
  }
  &:hover {
    background: none;
    outline: none;
    color: #007bff;
    &:before {
      opacity: 1;
      width: 10px;
    }
    &:after {
      margin-left: 18px;
      opacity: 1;
      transition: margin-left 0.3s ease, opacity 0.1s ease;
      border-color: #007bff;
    }
  }
`;
export const Author = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #0b1a2b;
  margin-bottom: 0px;
`;
export const MetaData = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #0b1a2b;
    margin-bottom: 8px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    color: #515667;
    margin-bottom: 16px;
  }
`;
export const Meta = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;
export const Features = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #515667;
  ul {
    padding: 0px;
    list-style: none;
    li {
      position: relative;
      padding-left: 36px;
      margin-bottom: 8px;
      &:before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        left: 0;
        top: 2px;
      }
      &:after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        left: -1.5px;
        top: 0px;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 18 14'%3e%3cpath fill='none' stroke='rgb(55, 192, 107)' stroke-width='2' d='M1 7L6 12L17 1'/%3e%3c/svg%3e");
        background-position: 6px center;
        background-size: 18px;
        background-repeat: no-repeat;
      }
      ul {
        padding: 0;
      }
    }
  }
`;
export const VideoWrapper = styled.div`
  .modal-video-close-btn {
    top: -50px;
    right: -50px;
    padding: 0px;
    &:hover {
      background: none;
    }
  }
  .modal-video-close-btn:before,
  .modal-video-close-btn:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 63%;
    left: 0;
    margin-top: -1px;
    background: #fff;
    border-radius: 5px;
    margin-top: -6px;
  }
`;
