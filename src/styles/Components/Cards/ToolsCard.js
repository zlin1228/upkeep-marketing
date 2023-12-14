import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  position: static;
  width: 100%;
  max-width: 375px;
  height: auto;
  background: #ffffff;
  border: 1px solid #eaeaec;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  border-radius: 14px;
  margin: 40px 0px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  h5 {
    width: 100%;
    height: auto;
    font-weight: bold;
    font-size: 21.6px;
    line-height: 32px;
    color: #33394b;
    margin-bottom: 24px;
    text-transform: initial;
  }
  .line_break {
    width: 100%;
    height: 0px;
    border: 1px solid #eaeaec;
    margin: 0px 0px 24px 0px;
  }
  a {
    width: 100%;
    height: auto;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #007bff;
    margin-bottom: 24px;
  }
`;
