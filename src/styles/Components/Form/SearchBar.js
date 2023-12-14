import styled from 'styled-components';


export const SearchHolder = styled.div`
  width: 100%;
  height: 48px;

  input {
    padding-left: 50px;
        box-shadow: 0px 4px 2px 0px rgba(22,29,37,0.05);
    
    :focus,
    :hover {
      box-shadow: 0px 4px 2px 0px rgba(22,29,37,0.05);
    }

    ::placeholder {
            }
  }

  li.react-search-box-dropdown-list-item {
    border: 0;
      }

  li.react-search-box-dropdown-list-item:hover {
  }
`

export const SearchPosition = styled.div`
  position: relative;
  z-index: 100;
`

export const IconHolder = styled.span`
  position: absolute;
  top: 10px;
  left: 20px;

  svg {
    }

  @media (max-width: 575px) {
    svg {
    }
  }
`;
