import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 150px 0px 96px;
  background: #172536;
  border-radius: 0px 0px 0px 100px;
  @media (max-width: 768px) {
    border-radius: 0px;
    padding: 150px 0px 48px;
  }
  .breadcrumbs {
    padding-bottom: 48px;
  }
  .breadcrumbs_container {
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0px auto;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 0px 15px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 470px 1fr;
  grid-auto-rows: auto;
  gap: 30px;
  align-items: center;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Col = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const HeadingKicker = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a9acb1;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 44.79px;
  line-height: 57px;
  color: #ffffff;
  margin-bottom: 16px;
`;
export const Subhead = styled.p`
  font-size: 17px;
  line-height: 26px;
  color: #f9f9f9;
  margin-bottom: 16px;
`;
export const Video = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 16px;
  overflow: hidden;
  &:hover {
    button {
      opacity: 0.8;
    }
  }
`;
export const LiteWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0px;
  width: 102%;
  height: 100%;
  z-index: 100;
  pointer-events: none;
  opacity: 1;
  transition: all 400ms ease-in-out;
  &.hidden {
    opacity: 0;
  }
`;
export const Button = styled.button`
  position: absolute;
  inset: 42.5%;
  width: 75px;
  height: 75px;
  background: white;
  border-radius: 50%;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  outline: none;
  border: none;
  opacity: 1;
  transition: all 400ms ease-in-out;
  svg {
    width: 50px;
    height: 50px;
    transform: translate(14px, 11px);
  }
`;
export const CallToActions = styled.div`
  @media (max-width: 991px) {
    margin-bottom: 1rem;
  }
  h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #f9f9f9;
    padding: 16px 0px;
    margin-bottom: 0;
  }
  a {
    margin-right: 1rem;
  }
`;
