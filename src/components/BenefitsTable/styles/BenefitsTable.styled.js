import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { shadow } from '../../../atoms/shadows';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 96px 0px;
  background: ${color.darkGrey[50]};
  @media (max-width: 575px) {
    padding: 64px 0px;
  }
  @media (max-width: 499px) {
    padding: 48px 0px;
  }
`;
export const CardsRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0px 30px;
  ${atMinWidth.lg`
    flex-direction: row;
    align-items: unset;
  `}
  .savings-disclaimer {
    max-width: 775px;
    margin: 0 auto;
    ${font('text', 'lg', '400')};
    color: ${color.darkBlue[600]};
  }
`;
export const CardFrame = styled.div`
  background: #ffffff;
  ${shadow('sm', 'dark')}
  border-top: ${props => `5px solid ${props.border}`};
  max-width: 470px;
  align-items: stretch;
  padding: 40px;
  .card-heading {
    ${font('display', 'sm', '700')};
    color: ${color.darkBlue[900]};
    margin-bottom: 24px;
  }
  .card-subhead {
    ${font('text', 'md', '400')};
    color: ${color.darkBlue[600]};
  }
  .features-list {
    list-style: none;
    padding: 0;
    margin-bottom: 0px;
    li {
      display: flex;
      padding: 12px 0px;
      .icon-wrapper {
        margin-right: 16px;
      }
    }
  }
  .feature-title {
    ${font('text', 'md', '700')};
    color: ${color.darkBlue[900]};
    img {
      margin-right: 16px;
    }
  }
  .feature-description {
    ${font('text', 'md', '400')};
    color: ${color.darkBlue[600]};
  }
`;
