import styled from 'styled-components';
import leftbg from '../../assets/background/left_code_bg.svg';
import rightbg from '../../assets/background/right_code_bg.svg';

export const Banner = styled.div`
  background-color: #007bff;
  background-image: url(${leftbg}), url(${rightbg});
  background-position: left top, right top;
  background-repeat: no-repeat;
  background-size: auto;
  padding-bottom: 100px;
  .banner-wrapper {
    padding: 50px 0px;
  }
  .cat-filter {
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
    select {
      border-radius: 0;
      &:focus {
        box-shadow: unset;
        border-color: #ced4da;
      }
    }
  }
`;
