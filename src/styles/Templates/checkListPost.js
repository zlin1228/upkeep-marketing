import styled from 'styled-components';
import { Link } from 'gatsby';
import { Col } from 'react-bootstrap';

export const Checklist = styled.div`
  position: relative;
  padding-top: 150px;
  .md-container{
    max-width:1200px;
    padding-top:20px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  min-height: 452px;
  width: 100%;
  background: #f3f5f9;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);

  @media screen and (max-width: 1199px) {
    min-height: 555px;
  }
`;
export const ColRight = styled(Col)`
  position: relative;
`;

export const ColLeft = styled(Col)`
  padding-bottom: 50px;

  @media screen and (max-width: 991px) {
    padding-bottom: 110px;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 25px;
  }
`;

export const H1 = styled.h1`
  padding-top: 8px;
  padding-bottom: 20px;
`;
export const CardLink = styled(Link)`
  position: relative;

  display: flex;
  align-items: center;
  width: fit-content;

`;

export const ArrowHolder = styled.span``;

export const Box = styled.div`
  position: absolute;
  top: 45px;
  right: 0px;
  width: 97%;
  padding: 32px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 24px 42px 0 rgba(24, 28, 36, 0.1);

  @media screen and (max-width: 767px) {
    position: initial;
    width: 100%;
  }
`;

export const Title = styled.p`
  padding-bottom: 20px;
`;

export const Item = styled.p`

  span {
    }
`;
export const Content = styled.div`
  padding-bottom: 10px;
`;

export const ListHolder = styled.div`
  margin-bottom: 64px;

  p {
    padding-bottom: 8px;
      font-size: 31.1px;
  }
  .md-container{
    max-width:1200px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 58px;
    margin-bottom: 60px;

    p {
      font-size: 26px;
    }
  }
`;
export const UL = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export const LI = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  padding-left: 70px;
  margin-bottom: 18px;


  @media screen and (max-width: 767px) {
  }
`;

export const CheckHolder = styled.span`
  position: absolute;
  left: 20px;

  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 23px;
  

  border-radius: 50%;
  background: linear-gradient(0deg, #e6f2ff 0%, #ffffff 100%);
`;

export const ListPostHolder = styled.div`
  margin: 50px 0;
  .md-container{
    max-width:1200px;
  }
`;
