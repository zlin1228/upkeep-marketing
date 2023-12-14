import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin-top: 32px;
  #defaultSearchBar {
    height: 42px;
    @media (max-width: 992px) {
      display: none;
    }
    #searchIcon {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Filters = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 16px;
  @media (max-width: 992px) {
    .filter-item {
      display: none;
    }
  }
`;
