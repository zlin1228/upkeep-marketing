import styled from 'styled-components';

export const FilterHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 48px;
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 0;
  width: 55%;

  list-style: none;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Tag = styled.li`
  margin-top: 25px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const TagBtn = styled.button`
  padding: 8px 24px;

  border: 1px solid rgb(234, 234, 236);
  font-size: 12px;
  line-height: 1.26;
  color:#7e828a;
  background:transparent;
  padding:10px ;
  min-width:80px;
  min-height:40px;
  border-radius: 27.5px;

  transition: all 0.2s ease-in-out;
  outline: none;

  &:focus {
    outline: none;
  }

  &:hover,
  &.active {
  
  }
`;

export const Label = styled.p`
  margin-bottom: 8px;

  line-height: 1.26;

  @media (max-width: 575px) {
  }
`;

export const DropdownHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-left: auto;
  width: 45%;

  &.fullWidth {
    width: 100%;

    .dropdown {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  .dropdown {
    max-width: 195px;

    &:not(:last-child) {
      margin-right: 8%;
    }

    // &:first-child {
    //   display: none;
    // }
  }

  .custom-btn {
    position: relative;

    padding: 15px 30px 15px 16px;

      line-height: 1.26;
    text-align: left;
  
    outline: none;

    border-radius: 3px;
    border: 1px solid rgb(234, 234, 236);
    box-shadow: 0 4px 2px 0 rgba(22, 29, 37, 0.05);
    width: 100%;
    border-style: solid;
    background: transparent;
    color:#33394B;
    &.active {
        }

    &:after {
      display: none;
    }

    svg {
      position: absolute;
      top: 50%;
      right: 8px;

      transform: translateY(-50%);

        }

    &[aria-expanded='true'] {
      svg {
        top: initial;
        right: 16px;

        transform: rotate(-180deg) translate(-50%, 0);
      }
    }
  }

  .dropdown-menu {
    padding: 0;
    width: 100%;
    max-height: 196px;

    overflow-y: auto;
  }

  .dropdown-item {
    padding: 10px 15px;

      line-height: 1.26;
    text-align: left;
  
    &:not(:last-child) {
        }

    &:active {
    }
  }

  @media (max-width: 991px) {
    justify-content: space-between;
    margin-left: initial;
    width: 100%;

    &.fullWidth {
      width: 100%;

      .dropdown {
        &:not(:last-child) {
          margin-right: initial;
        }
      }
    }

    .dropdown {
      width: 32%;

      // &:first-child {
      //   display: initial;
      // }

      &:not(:last-child) {
        margin-right: initial;
      }
    }
  }

  @media (max-width: 575px) {
    width: 100%;
    max-width: 370px;
    margin: auto;

    .dropdown {
      width: 100%;
      max-width: initial;

      &:not(:last-child) {
        margin-right: initial;
        margin-bottom: 15px;
      }
    }
  }
`;
