import styled from 'styled-components';

export const Section = styled.div`
  padding: 64px 0 20px;
  margin: auto;
  max-width: 1920px;

  @media (max-width: 991px) {
    padding: 64px 0 0;
  }
`;

export const Wrapper = styled.div`
  margin-left: auto;
  max-width: 1550px;

  @media (max-width: 991px) {
    padding-right: 15px;
    padding-left: 15px;
    margin-left: auto;
    margin-right: auto;
    max-width: 720px;
  }
`;

export const SectionHeading = styled.h2`
  margin-left: 30px;
  margin-bottom: 48px;

  font-weight: 600;
  line-height: 1.26;

  @media (max-width: 991px) {
    margin-left: initial;

    text-align: center;
  }

  @media (max-width: 575px) {
  }
`;
