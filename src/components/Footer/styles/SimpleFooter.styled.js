import styled from 'styled-components';
import { Link } from 'gatsby';
import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { containers } from '../../../atoms/containers';

export const Footer = styled.div`
  width: 100%;
  background: ${color.darkBlue[1000]};
  padding: 24px 0px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.xl};
  padding: 0px 35px;
  margin: 0px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  ${atMinWidth.md`
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
  `}
`;

export const TextLink = styled(Link)`
  ${font('text', 'sm', '400')}
  color: ${color.darkBlue[100]};
  &:hover {
    color: ${color.darkBlue[100]};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  ${atMinWidth.md`
    flex-direction: row;
  `}
  .copyright {
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[100]};
  }
`;

export const Logo = styled.img`
  max-width: 160px;
`;

export const Links = styled.div`
  display: flex;
  gap: 48px;
`;
