import styled from 'styled-components';

export const Frame = styled.div`
  position: relative;
  left: 0px;
  display: block;
  width: 100%;
  max-width: 735px;
  height: 100%;
  background: #00254c;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: all 0.3s ease-in-out;
  transform: translateX(-1000px);
  &.active {
    transform: translateX(0px);
    z-index: 9998;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 573px;
  padding: 0px 15px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;
export const Heading = styled.div`
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: left;
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 64px;
    line-height: 72px;
    font-style: normal;
    font-weight: bold;
    margin-bottom: 16px;
    color: #ffffff;
    span {
      color: #cce5ff !important;
    }
  }
  @media (max-width: 768px) {
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 56px;
      line-height: 64px;
    }
  }
  @media (max-width: 499px) {
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;
export const Subhead = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 25.92px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;
export const FormWrapper = styled.div`
  width: 100%;
  height: auto;
  .form-control {
    border: 1px solid #ffffff !important;
    color: #ffffff !important;
    &::placeholder {
      color: white;
    }
    &:focus {
      box-shadow: unset;
      border: 1px solid #006de6 !important;
      box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
      &::placeholder {
        color: #ffffff !important;
      }
    }
  }
`;
export const PrivacyPolicy = styled.p`
  width: 100%;
  height: auto;

  font-style: normal;
  font-weight: normal;
  font-size: 14px !important;
  line-height: 150% !important;
  color: #ffffff;
  text-align: center;
  @media (max-width: 499px) {
    font-size: 12px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  padding: 0px;
  margin: 0px;
  background: none;
  outline: none;
  box-shadow: none;
  border: none;
  opacity: 1;
  transition: all 0.3s ease;
  z-index: 9999;
  @media (max-width: 991px) {
    top: 20px;
    right: 20px;
  }
  &:hover {
    background: none;
    outline: none;
    border: none;
    opacity: 0.5;
  }

  &:focus {
    background: none;
    outline: none;
    border: none;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
