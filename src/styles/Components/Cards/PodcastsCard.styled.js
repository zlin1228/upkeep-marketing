import styled from 'styled-components';
import { Link } from 'gatsby';

export const Frame = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background: #f5f6f9;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 300ms ease-in-out;
  &:hover {
    background: #ffffff;
    box-shadow: 0px 20px 56px rgba(40, 47, 60, 0.15);
  }
`;
export const Clickable = styled(Link)`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
export const Image = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  .gatsby-image {
    width: 100%;
    height: 100%;
    min-height: 208px;
  }
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
`;
export const Text = styled.div`
  width: 100%;
  height: auto;
  h5 {
    font-weight: 700;
    font-size: 13.5px;
    line-height: 16px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #b3bbcb;
    margin-bottom: 8px;
  }
  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #0d141a;
    margin-bottom: 8px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #515667;
    margin-bottom: 8px;
  }
`;
