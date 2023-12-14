import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  max-width: 570px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 31px;
  background: #ffffff;
  border: 1.5px solid #eaeaec;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
    */ .arrow-link {
      &:after {
        right: -24px;
        margin-left: 18px;
        opacity: 1;
        transition: margin-left 0.3s ease, opacity 0.1s ease;
      }

      &:before {
        animation-name: grow-right;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        @keyframes grow-right {
          0% {
            opacity: 0;
            width: 0;
          }
          100% {
            opacity: 1;
            width: 10px;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    flex-direction: column;
    max-width: 70vw !important;
  }
`;
export const Thumbnail = styled.div`
  width: 120px;
  min-width: 120px;
  height: 120px;
  min-height: 120px;
  .gatsby-image-wrapper img {
    width: 120px;
    height: 120px;
    object-fit: cover !important;
  }
  @media (max-width: 576px) {
    margin-right: auto;
  }
`;
export const Body = styled.div`
  width: 100%;
  height: initial;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 576px) {
    padding: 24px 0px 0px 0px;
  }
`;
export const Details = styled.div`
  width: 100%;
  height: auto;
`;
export const Title = styled.h3`
  ${font('display', 'xs', '700')}
  color: ${color.darkBlue[900]};
  margin-bottom: 16px;
`;
