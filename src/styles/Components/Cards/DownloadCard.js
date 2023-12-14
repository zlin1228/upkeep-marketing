import styled from 'styled-components';
import { Link } from 'gatsby';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { shadow } from '../../../atoms/shadows';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background: ${color.common.neutral};
  transition: all 0.3s ease;
  &:hover {
    ${shadow('xxl', 'dark')}
  }
`;
export const Clickable = styled(Link)`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 210px;
  overflow: hidden;
  padding-top: 56.25%;
  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover !important;
      object-position: top !important;
    }
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
export const Category = styled.div`
  width: 100%;
  height: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin: 0px 0px 16px;
  h6 {
    ${font('overline', 'sm', '700')}
    color: ${color.primary[700]};
    margin: 0px;
  }
  .card_type {
    margin-right: 24px;
  }
  .card_category {
    color: ${color.mediumGrey[300]};
  }
`;
export const Details = styled.div`
  width: 100%;
  height: auto;
  .card_title {
    ${font('display', 'xs', '700')}
    color: ${color.darkBlue[900]};
    margin-bottom: 16px;
  }
  .card_description {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
    margin-bottom: 16px;
    p {
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[600]};
    }
  }
`;
