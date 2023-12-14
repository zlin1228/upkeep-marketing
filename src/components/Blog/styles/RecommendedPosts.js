import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  max-width: 370px;
  height: fit-content;
  .heading {
    width: 100%;
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
    margin-bottom: 24px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    height: auto;
    hr {
      width: 100%;
      height: 0px;
      border: 1px solid #eaeaec;
      margin: 16px 0px;
    }
    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      width: 100%;
      height: auto;
      &:hover {
        .title {
          color: #007bff;
        }
      }
      .thumbnail {
        width: 72px;
        min-width: 72px;
        height: 72px;
        margin-right: 16px;
        overflow: hidden;
        .gatsby-image {
          img {
            object-fit: cover !important;
          }
        }
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      .title {
        width: 100%;
        ${font('text', 'md', '700')}
        color: ${color.darkBlue[600]};
        transition: all 0.3s ease;
      }
    }
  }
`;
