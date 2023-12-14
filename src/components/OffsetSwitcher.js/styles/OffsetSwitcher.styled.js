import styled from 'styled-components';

export const SwitcherContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
  @media (max-width: 768px) {
    padding: 64px 0px;
  }
  .show {
    animation: fadeIn 1.75s;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  .hide {
    display: none;
  }
`;
