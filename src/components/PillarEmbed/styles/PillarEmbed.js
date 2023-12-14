import styled from 'styled-components';
import { atMinWidth } from '../../../atoms/breakpoints';
import { richTextStyles } from '../../../atoms/typography';

export const Section = styled.section`
  width: 100%;
  padding: 64px 0px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column-reverse;
  gap: 32px;
  padding: 0px 24px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
    display: grid;
    grid-template-columns: 1fr 370px;
    gap: 30px;
  `}
`;
export const RichText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${richTextStyles}
`;
export const Sidebar = styled.aside`
  .social-share,
  .subscription-card {
    display: none;
  }
  ${atMinWidth.xl`
    display: flex;
    flex-direction: column;
    gap: 32px;
    .social-share,
    .subscription-card {
      display: flex;
    }
  `}
`;
