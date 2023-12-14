import styled from 'styled-components';
import { richTextStyles } from '../../../atoms/typography';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
export const Thumbnail = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  margin-bottom: 24px;
  overflow: hidden;
`;
export const Details = styled.div`
  width: 100%;
  height: auto;
  @media (max-width: 991px) {
    order: 1;
  }
`;
export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  color: #0b1a2b;
  margin-bottom: 16px;
`;
export const Post = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-bottom: 1px solid #eaeaec;
  padding-bottom: 32px;
  margin-bottom: 32px;
  ${richTextStyles}
`;
export const Authors = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #33394b;
    margin: 8px 0px;
  }
`;
