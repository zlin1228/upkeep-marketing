import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .icon {
    width: 35px;
    height: 35px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${color.primary[700]};
    margin-bottom: 24px;
    svg {
      margin: 0px;
    }
  }
  .thumbnail {
    width: 100%;
    height: auto;
    margin-bottom: 32px;
    @media (min-width: 992px) {
      display: none;
    }
    @media (max-width: 991px) {
      height: 400px;
    }
    @media (max-width: 768px) {
      height: 350px;
    }
    @media (max-width: 675px) {
      height: 300px;
    }
    @media (max-width: 575px) {
      height: 250px;
    }
    img {
      border-radius: 16px;
      overflow: hidden;
      object-fit: cover !important;
    }
  }

  h2 {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
    margin-bottom: 24px;
  }
  p {
    ${font('text', 'lg', '400')}
    color: ${color.mediumGrey[700]};
    margin-bottom: 24px;
  }
`;
