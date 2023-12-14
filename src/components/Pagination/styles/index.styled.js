import styled from 'styled-components';

const themes = {
  light: '#ffffff',
  dark: '#0b1a2b',
};
export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    justify-content: center;
  }
`;
export const PageNumbers = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  .elipsis {
    cursor: default;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    margin-left: 24px;
    color: ${({ theme }) => themes[theme]};
  }
`;
export const Number = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 8px;
  padding: 0px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 1;
  transition: 0.3s ease;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => themes[theme]};
  background: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &.active,
  &:hover {
    color: ${({ theme }) => (theme === 'dark' ? themes.light : themes.dark)};
    background: ${({ theme }) =>
      theme === 'dark' ? themes.dark : themes.light};
  }
`;
export const Button = styled.button`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  background: none;
  outline: none;
  border: none;
  padding: 8px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  opacity: 1;
  transition: all 300ms ease-in-out;
  color: ${({ theme }) => themes[theme]};
  &:hover,
  &:focus {
    outline: none;
    background: none;
    border: none;
    color: ${({ theme }) => themes[theme]};
    opacity: 0.5;
  }
  &.paginate-prev,
  &.paginate-next {
    visibility: hidden;
  }
  &.paginate-prev-active,
  &.paginate-next-active {
    visibility: visible;
  }
  @media (max-width: 992px) {
    &.paginate-prev,
    &.paginate-next,
    &.paginate-prev-active,
    &.paginate-next-active {
      display: none;
    }
  }
  svg {
    margin: 8px;
  }
  svg path {
    stroke: ${({ theme }) => themes[theme]};
  }
`;
