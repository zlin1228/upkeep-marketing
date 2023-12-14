import styled from 'styled-components';
import { color } from '../../../../../atoms/colors';
import { font } from '../../../../../atoms/typography';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding: 48px 0px 64px 0px;
  ${atMinWidth.md`
    padding: 96px 0px;
  `}
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin: 0px auto;
  padding: 0px 24px;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
  `}
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 100px;
  `}
`;
export const Sidebar = styled.aside`
  width: 100%;
  display: none;
  ${atMinWidth.xl`
    position: sticky;
    top: 120px;
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    ${({ showAnnouncementBar }) => showAnnouncementBar && `top: 180px;`}
  `}
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
  }
  .subhead {
    display: none;
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[900]};
    ${atMinWidth.xl`
      display: block;
    `}
  }
`;
export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${atMinWidth.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 64px 30px;
  `}
`;
