import styled from 'styled-components';
import { Link } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import {
  headingKickerColors,
  backgroundColors,
} from '../../../utils/colorMappings';

export const FeaturesPanels = styled.section`
  ${props => backgroundColors[props.background]};
`;
export const FeaturePanelsWrapper = styled(Container)`
  padding: 50px 0 100px;
  position: relative;
  @media (max-width: 568px) {
    padding: 100px 0 30px;
  }
  width: 100%;
`;
export const BannerContent = styled(Col)`
  max-width: 767px;
  margin: 0 auto;
  margin-bottom: 4rem;
`;
export const HeadingKicker = styled.h5`
  ${props => headingKickerColors[props.color]};
`;
export const Heading = styled.h2`
  max-width: 770px;
  margin: 0 auto 24px;
  text-align: center;
  color: #0b1a2b;
`;
export const Subhead = styled.div`
  margin: 18px 0 40px 0;
  max-width: 100%;
  width: 770px;
  margin: 0 auto;
  p {
    margin: 0;
    text-align: center;
    color: #707481;
  }
`;
export const CallToAction = styled(Link)`
  margin: 0 auto;
`;
export const FeatureContent = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 72px;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    padding-top: 18px;
  }
`;
export const FeatureCallToAction = styled(Link)`
  margin: 2rem 0rem;
`;
export const FeatureImage = styled.div`
  max-width: 850px;
  max-height: 700px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
export const FeatureContentWrapper = styled(Col)`
  background: rgba(230, 242, 255, 0.5);
  width: 100%;
  height: 550px;
  overflow: hidden;
`;
export const FeaturesToggles = styled(Row)`
  @media (max-width: 991px) {
    margin-bottom: 1rem;
    padding: 0rem 2rem;
  }
`;
export const Features = styled(Col)`
  position: relative;
  cursor: pointer;
  margin-bottom: 1rem;
  @media (max-width: 450px) {
    margin-bottom: 3rem;
  }
`;
export const FeatureCallOut = styled.div`
  position: absolute;
  z-index: 100;
  height: 0px;
  width: 100%;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 6px solid #007bff;
  box-shadow: 0px 20px 40px rgba(0, 123, 255, 1);
  @media (max-width: 991px) {
    border-top: 3px solid #007bff;
    top: 70px;
  }
  @media (max-width: 450px) {
    top: 120px;
  }
`;
export const FeatureHeading = styled.h4`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #33394b;
  margin-bottom: 18px;
`;
export const FeatureHeadingKicker = styled.h5`
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #707481;
`;
