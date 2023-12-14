import styled from 'styled-components';

export const Success = styled.h4`
  width: 100%;
  max-width: 770px;
  height: 100%;
  color: white;
  text-align: center;
  line-height: 2rem;
  margin: 0px auto;
`;
export const Validation = styled.h5`
  position: absolute;
  transform: translateY(10px);
  color: #992019;
  text-transform: none;
  @media (max-width: 768px) {
    position: relative;
    transform: translateY(0px);
    font-size: 0.7rem;
    margin-top: 16px;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 48px 15px;
  margin: 0px auto;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 176px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background: #007bff;
  border-radius: 12px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
export const Col = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
export const Heading = styled.h2`
  width: 100%;
  height: auto;
  margin: 0px;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 37.32px;
  line-height: 48px;
  color: #ffffff;
`;
export const Subhead = styled.p`
  width: 100%;
  height: auto;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0px;
`;
export const Form = styled.form`
  width: auto;
  height: auto;
  display: flex;
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 499px) {
    flex-direction: column;
  }
`;
export const Label = styled.label`
  position: relative;
  width: auto;
  height: 100%;
  margin-right: 15px;
  @media (max-width: 991px) {
    width: 100%;
    flex: 0.75;
  }
`;
export const Input = styled.input`
  width: 357px;
  height: 56px !important;
  background: #ffffff;
  border-radius: 8px;
  padding: 8px 24px;
  outline: none;
  border: 1px solid #ffffff !important;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #515667;
  &::placeholder {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    color: #515667;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`;
export const Button = styled.input`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  width: 113px;
  height: 56px;
  background: #ffffff;
  border-radius: 8px;
  outline: none;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #007bff;
  opacity: 1;
  transition: all 300ms ease-in-out;
  &:hover {
    opacity: 0.75;
  }
  @media (max-width: 991px) {
    width: 100%;
    flex: 0.25;
  }
`;
