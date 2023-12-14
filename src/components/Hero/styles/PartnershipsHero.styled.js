import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 150px 0px 96px;
  @media (max-width: 991px) {
    padding: 150px 0px 48px;
  }
  @media (max-width: 768px) {
    padding: 150px 0px 32px;
  }
  @media (max-width: 575px) {
    padding: 150px 0px 24px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 0px 15px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Icon = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  svg {
    width: 64px;
    height: 64px;
  }
`;
export const HeadingKicker = styled.h5`
  color: #6c72c7;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;
export const Heading = styled.h1`
  font-size: 44.79px;
  line-height: 52px;
  color: #0b1a2b;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: initial;
    margin-bottom: 16px;
  }
`;
export const Subhead = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: #515667;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
  }
`;
export const Search = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 570px;
  height: auto;
  min-height: 63px;
  margin-bottom: 36px;
  label {
    position: relative;
  }
  label,
  input[type='search'] {
    width: 100%;
    min-height: 63px;
    height: auto;
    margin: 0px;
    border-radius: 8px;
    background: #ffffff;
    border-radius: 4px;
    border: none;
    outline: none;
  }
  input[type='search'] {
    background: #ffffff;
    border: 1px solid #e0e6ed;
    box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
    padding: 0px 0px 0px 60px;
    @media (max-width: 499px) {
      padding: 0px 0px 0px 45px;
    }
  }
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  input[type='search'],
  input[type='search']::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 21.6px;
    line-height: 32px;
    color: #515667;
    @media (max-width: 768px) {
      font-size: 16px;
      line-height: initial;
    }
    @media (max-width: 499px) {
      font-size: 14px;
      line-height: initial;
    }
  }
`;
export const SearchIcon = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: fit-content;
  min-width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    path {
      fill: #007bff;
    }
    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
      font-size: 16px;
    }
    @media (max-width: 499px) {
      width: 14px;
      height: 14px;
      font-size: 14px;
    }
  }
`;
