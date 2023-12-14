import styled from 'styled-components';

export const SearchBarStyles = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 240px;
  height: 37px;
  flex: none;
  order: 1;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
  .form-control {
    height: 100%;
    border: 2px solid #eaeaec;
  }
  .form-control::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #707481;
  }
  .form-control:focus {
    border-color: #eaeaec;
    box-shadow: inset 0 1px 1px rgba(234, 234, 236, 0.5),
      0 1px 1px rgba(234, 234, 236, 0.5);
  }
  .input-group-append {
    background: #eaeaec;
    border-radius: 25px;
  }
  .input-group-text {
    border: 1px solid #eaeaec;
  }
`;
export const SearchSuggestions = styled.div`
  width: 100%;
  max-width: 240px;
  position: absolute;
  background: white;
  transform: translateY(40px);
  display: flex;
  flex-direction: column;
  z-index: 9999;
  box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.05);
  @media (max-width: 768px) {
    max-width: 92.5%;
  }
  a,
  .result_not_found {
    z-index: 9999;
    padding: 10px 16px;
    background: white;
    outline: none;
    border: none;
    color: black;
    text-align: left;
    opacity: 0.7;
    font-size: 0.833rem;
  }
  a {
    border-bottom: 1px solid #ddd;
    &:hover {
      opacity: 0.9;
      background: #eee;
    }
  }

  .result_not_found {
    pointer-events: none;
  }
`;
