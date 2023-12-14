import styled from 'styled-components';

import { font, richTextStyles } from '../../atoms/typography';
import { atMinWidth } from '../../atoms/breakpoints';
import { color } from '../../atoms/colors';

export const Main = styled.main`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  margin: 0px;
  padding: 0px;
  .card-deck-section {
    padding-top: 0px;
  }
`;
export const Section = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  padding: 164px 0px 0px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 1fr 1170px 1fr;
  grid-template-areas: 'prev content next';
  grid-auto-rows: auto;
  gap: 0px 52px;
  @media (max-width: 1600px) {
    grid-template-columns: 1fr 991px 1fr;
    gap: 0px 26px;
  }
  @media (max-width: 1250px) {
    grid-template-areas: 'content';
    grid-template-columns: 1fr;
    gap: 0px;
    padding: 192px 15px 96px 15px;
  }
  @media (max-width: 991px) {
    grid-template-areas: 'content';
    grid-template-columns: 1fr;
    gap: 0px;
    padding: 96px 15px 48px;
  }
`;
export const Content = styled.div`
  grid-area: content;
  position: relative;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 370px;
  grid-template-areas:
    'details sidebar'
    'newsletter newsletter';
  grid-auto-rows: auto;
  gap: 30px 130px;
  @media (max-width: 1600px) {
    gap: 30px;
  }
  @media (max-width: 991px) {
    grid-template-areas:
      'details'
      'newsletter'
      'sidebar';
    grid-template-columns: 1fr;
    gap: 30px 0px;
  }
`;
export const Details = styled.div`
  grid-area: details;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
    ${atMinWidth.xl`
      ${font('display', 'lg', '700')}
    `}
  }
`;
export const Authors = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* border: 1px solid black; */
  .heading {
    ${font('overline', 'sm', '700')}
    color: ${color.darkBlue[600]};
  }
  .authors {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    /* border: 1px solid black; */
    ${atMinWidth.xl`
      flex-direction: row;
    `}
  }
  .author {
    width: 100%;
    /* border: 1px solid black; */
    margin: 0px auto;
  }
`;
export const Event = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0px auto;
  ${richTextStyles}
`;
export const Sidebar = styled.aside`
  position: relative;
  top: 0px;
  grid-area: sidebar;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
