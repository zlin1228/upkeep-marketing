import React from 'react';
import upkeepLogo from '../../assets/upkeep-logo-white.svg';
import HeroSocialProof from '../SocialProof/HeroSocialProof';
import TrialFormB from '../Forms/FreeTrialForm';
import trialPageData from '../../data/TrialPageB';
import {
  Main,
  Logo,
  Wrapper,
  Container,
  Content,
  Heading,
  Subhead,
} from '../../styles/Pages/FreeTrialPage2';

const FreeTrialPage2 = ({ salesform }) => (
  <Main>
    <Logo>
      <img
        loading="eager"
        src={upkeepLogo}
        alt="UpKeep"
        width="150px"
        height="40px"
      />
    </Logo>
    <Wrapper>
      <Container background="#00254c">
        <Content padding="0px 15px">
          <Heading
            dangerouslySetInnerHTML={{ __html: trialPageData.heading }}
          />
          <Subhead
            dangerouslySetInnerHTML={{ __html: trialPageData.subhead }}
          />
          <HeroSocialProof data={trialPageData.socialProof} theme="Dark" />
        </Content>
      </Container>
      <Container background="#ffffff">
        <Content padding="0px">
          <TrialFormB form={{ salesform }} />
        </Content>
      </Container>
    </Wrapper>
  </Main>
);

export default FreeTrialPage2;
