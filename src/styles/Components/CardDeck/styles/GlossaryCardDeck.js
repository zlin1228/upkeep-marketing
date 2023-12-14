import React from 'react'
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'gatsby'

export const GlossaryLetter = styled.div`
  font-size: 45px;
  font-weight: 700;
  color: #000000;
`
export const Cards = styled(Row)`
`
export const Card = styled(Col)`
  padding: 32px;
  position: relative;
  transition: all 0.3s ease;
  position: relative;
  margin: 0 0 2rem;
  ${props => props.hoverable &&
  `
  &:hover {
    box-shadow: 0px 0px 30px rgba(10, 16, 34, 0.1);

    .standalone-link {
      &:after {
        right: -24px;
      }
      &:before {
        animation-name: grow-right;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;

        /*animations*/
        @keyframes grow-right {
          0% {
            opacity: 0;
            width: 0;
          }
          100% {
            opacity: 1;
            width: 12px;
          }
        }
      }
    }
  }
  `
  }
  h3 {
    color: #007BFF;
    font-size: 22px;
  }
  p {
    font-size: 18px;
    line-height: 26px;
    color: #707481;
  }
`
export const Clickable = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
`
export const CallToAction = styled(Link)`
position: relative;
font-size: 15px;
line-height: 20px;
color: #33394B;
&:hover{
  color: #33394B;
}
&:after {
  position: absolute;
  content: "";
  top: 50%;
  margin: auto;
  right: -16px;
  transform: translateY(-50%)rotate(45deg);
  transform-origin: bottom;
  width: 6px;
  height: 6px;
  border-top: 2px solid #33394B;
  border-right: 2px solid #33394B;
  transition: all 0.3s ease;
}
&:before {
  position: absolute;
  content: "";
  top:50%;
  left:calc(100% + 13px);
  width: 0;
  opacity:0;
  border-bottom: 2px solid #33394B;
}
`;