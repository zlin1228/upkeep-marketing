import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export default styled.div`
  height: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  .author_details {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .author_headshot {
    height: 50px !important;
    width: 50px !important;
    margin-right: 8px;
    display: flex;
    position: relative;
    transform: translateY(5px);
    img {
      height: 40px !important;
      width: 40px !important;
      border-radius: 9999px;
      object-fit: cover !important;
    }
    .gatsby-image-wrapper {
      overflow: visible !important;
    }
  }
  .author_name {
    ${font('text', 'sm', '700')}
    color: ${color.darkBlue[900]};
  }
  .author_role {
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[600]};
  }
`;
