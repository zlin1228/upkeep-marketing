import React from 'react';
import CallToAction from '../CallToAction';
import {
  Section,
  Wrapper,
  Content,
  Downloads,
  CTAWrapper,
  ImgWrapper,
  Image,
  Heading,
  Subhead,
} from './styles/DownloadApp.styled';
import apple from './assets/apple.png';
import google from './assets/google.png';

const DownloadApp = ({ component }) => (
  <Section>
    <Wrapper>
      <Content>
        {component?.heading && <Heading>{component?.heading}</Heading>}
        {component?.subhead && (
          <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
        )}
        <Downloads>
          <a href="https://apps.apple.com/us/app/upkeep-work-order-maintenance/id921799415">
            <img src={apple} alt="Download the app on Apple app store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.onupkeep&hl=en_IN&pli=1">
            <img src={google} alt="Download the app on Google Play" />
          </a>
        </Downloads>
        <CTAWrapper>
          <p>Not ready to download yet? </p>
          <CallToAction
            url="https://www.upkeep.com/free-trial-signup"
            label="Free Trial Sign up"
            variant="Arrow-Link-Light"
            icon="fa-solid fa-chevron-right"
          />
        </CTAWrapper>
      </Content>
      <ImgWrapper>
        <Image
          src={component?.featuredImage?.url}
          alt={component?.featuredImage?.alt}
        />
      </ImgWrapper>
    </Wrapper>
  </Section>
);

export default DownloadApp;
