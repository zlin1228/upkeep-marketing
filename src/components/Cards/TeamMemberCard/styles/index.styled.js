import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 100%;
  min-height: 390px;
  height: 100%;
  transition: transform 0.8s;
  overflow: hidden;
  border-radius: 8px;
  .gatsby-image-wrapper {
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
  }
`;
