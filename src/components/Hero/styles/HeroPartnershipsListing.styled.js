import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

import HeroBgSm from '../../../assets/background/partnerships-bg-sm.svg';
import HeroBgMd from '../../../assets/background/partnerships-bg-md.svg';
import HeroBgLg from '../../../assets/background/partnerships-bg-lg.svg';
import HeroBgXl from '../../../assets/background/partnerships-bg-xl.svg';

export const Section = styled.section`
  width: 100%;
  min-height: 521px;
  padding: 101px 0px 48px;
  background-image: url(${HeroBgSm});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  ${atMinWidth.sm`
    background-image: url(${HeroBgMd});
  `}
  ${atMinWidth.md`
    background-image: url(${HeroBgLg});
    padding: 121px 0px 0px;
    min-height: 604px;
  `}
  ${atMinWidth.xl`
    background-image: url(${HeroBgXl});

  `}
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  max-width: 1240px;
  padding: 0px 23.5px;
  margin: 0px auto;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  .heading {
    ${font('display', 'lg', '700')}
    color: ${color.common.white};
  }
  .subhead,
  .subhead p {
    ${font('text', 'md', '400')}
    color: ${color.common.white};
    ${atMinWidth.sm`
        ${font('text', 'lg', '400')}
    `}
  }
  .subhead a {
    text-decoration: underline;
    ${font('text', 'md', '600')}
    color: ${color.common.white};
    ${atMinWidth.sm`
        ${font('text', 'lg', '600')}
    `}
  }
`;
export const SearchBar = styled.div`
  width: 100%;
  max-width: 770px;
  margin: 0px auto;
`;
