import React from 'react';
import styled from 'styled-components';
import { Card } from './CardDeck';

export const Heading = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 25.92px;
  line-height: 32px;
  text-align: center;
  color: #000000;
`;
export const StyledWebinarCard = styled(Card)`
  background: #fafcff;
  border: 1px solid #e0e6ed;
  box-sizing: border-box;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  padding: 0px;
`;
export const CardThumbnail = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
export const CardBody = styled.div`
  padding: 24px;
`;
export const CardHeading = styled.h6`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #33394b;
  margin-bottom: 0.5rem;
`;
export const CardSubhead = styled.p`
  font-size: 15px;
  line-height: 22px;
  @media (min-width: 991px) {
    min-height: 76px;
  }
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #707481;
`;
