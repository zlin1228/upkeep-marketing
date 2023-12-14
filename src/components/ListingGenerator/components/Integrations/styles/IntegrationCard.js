import styled from 'styled-components';
import { Link } from 'gatsby';

import { font } from '../../../../../atoms/typography';
import { color } from '../../../../../atoms/colors';

export const Frame = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: #ffffff;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  transition: all 0.3s ease;
  border-radius: 16px;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);
    .cta_animation {
      &:after {
        right: -24px;
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
            width: 12px;
          }
        }
      }
    }
  }
`;
export const Clickable = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
`;
export const CardHeader = styled.div`
  width: 100%;
  min-height: 208px;
  max-height: 208px;
  background: white;
  margin: 0px;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  width: 100%;
  height: auto;
  margin: 0px;

  .details {
    display: flex;
    flex-direction: column !important;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    height: auto;
    margin-bottom: 24px;

    .title_row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      position: static;
      width: 100%;
      height: auto;
      margin-bottom: 16px;
      .title {
        ${font('text', 'lg', 900)}
        color: #33394b;
        margin-right: 16px;
      }
      .preferred_tag {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 4px 12px;
        width: 93px;
        height: 24px;
        background: #ebf9f0;
        border-radius: 3px;
        margin: 0px;
        ${font('text', 'xs', 800)}
        text-transform: uppercase;
        color: #1c6036;
      }
    }
  }
  .details_body {
    min-height: 118px;
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
    margin-bottom: 16px;
  }
  .cta {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    width: 100%;
    height: auto;
    margin: 0px;
  }
`;
