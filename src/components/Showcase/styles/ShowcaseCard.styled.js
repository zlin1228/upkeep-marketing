import styled from 'styled-components';

export const CardFrame = styled.div`
  width: 100%;
  max-width: 370px;
  height: auto;
  @media (max-width: 576px) {
    max-width: 505px;
  }
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 25.92px;
  line-height: 32px;
  color: #007bff;
`;

export const Subhead = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #515667;
`;
