import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: ${spacing[8]};
  .column-heading {
    ${font('display', 'xs', '700')}
    color: ${color.common.white};
  }
  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing[8]};
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  a {
    display: flex;
    align-items: center;
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[100]};
    transition: color 300ms ease-in-out;
    &:hover {
      color: ${color.darkBlue[500]};
    }
  }
  &#contactInfo {
    gap: ${spacing[16]};
    .links {
      gap: ${spacing[16]};
    }
    a {
      min-height: 26px;
      display: flex;
      align-items: center;
      border-radius: 0px;
    }
    svg {
      width: 18px;
      height: 18px;
    }
  }
  &#socialMediaInfo {
    margin-bottom: 0px;
    .links {
      display: flex;
      flex-direction: row;
      a {
        width: 30px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0px;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
        &:hover {
          opacity: 0.3;
        }
      }
    }
  }
  &#appInfo {
    gap: ${spacing[24]};
    .links {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;
      a {
        width: max-content;
        height: 40px;
      }
    }
  }
`;
export const Badge = styled.span`
  padding: 4px 12px;
  background: ${color.primary[25]};
  color: ${color.primary[1000]};
  ${font('text', 'sm', '700')}
  border-radius: 16px;
  margin-left: 10px;
`;
