import styled, { css } from 'styled-components';

const kickerThemes = {
  Article: `
      color: #007BFF;
    `,
  Download: `
      color: #3A2EE2;
    `,
  Podcast: `
      color: #00B451;
    `,
  Template: `
      color: #EF9417;
    `,
  Tool: `
      color: #F06EBA;
    `,
  Webinar: `
      color: #56BDFF;
    `,
};
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px 24px;
  @media (max-width: 576px) {
    padding: 32px 12px;
  }
  @media (max-width: 499px) {
    padding: 32px 8px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 337.3px;
  box-shadow: 0px 2px 56px rgba(40, 47, 60, 0.1);
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Thumbnail = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  aspect-ratio: 16 / 9;
  @media (max-width: 992px) {
    max-width: 100%;
    max-height: 433px;
  }
  @media (max-width: 576px) {
    max-height: 257px;
  }
  @media (max-width: 499px) {
    max-height: 175px;
  }
  .gatsby-image,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover !important;
  }
`;
export const Text = styled.div`
  width: 100%;
  height: auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const HeadingKicker = styled.h6`
  font-weight: 700;
  font-size: 13.5px;
  line-height: 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 16px;
  ${({ type }) => (type ? kickerThemes[type] : '')}
`;
export const Heading = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  color: #0d141a;
  margin-bottom: 16px;
`;
export const Subhead = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #515667;
  margin-bottom: 16px;
`;
export const Button = css`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #007bff;
  svg {
    margin-left: 9px;
    path {
      transition: all 300ms ease-in-out;
    }
  }
  &:hover {
    color: #0056b3;
    svg path {
      stroke: #0056b3;
    }
  }
`;
