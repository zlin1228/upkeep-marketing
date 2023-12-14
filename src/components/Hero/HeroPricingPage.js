import React, { useRef } from 'react';

import Breadcrumbs from '../../molecules/Breadcrumbs';
import PricingTabs from '../PricingComponent/variants/Default/components/Switcher';
import PricingCards from '../PricingComponent/variants/Default/components/PricingCards';

import {
  Section,
  Wrapper,
  Container,
  Text,
  BackgroundImage,
} from './styles/HeroPricingPage.styled';

import useParallaxEffect from '../../hooks/useParallaxEffect';

const HeroPricingPage = ({
  headingKicker,
  heading,
  subhead,
  pricingGroups,
  pricingGroup,
  setPricingGroup,
}) => {
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);

  if (pricingGroup && pricingGroup?.hidePricingCards) {
    return null;
  }

  return (
    <Section>
      <BackgroundImage ref={backgroundRef} loading="eager" />
      <Wrapper>
        <Container>
          <Breadcrumbs theme="Dark" />
          <Text>
            {headingKicker && <p className="eyebrow">{headingKicker}</p>}
            {heading && <h1 className="heading">{heading}</h1>}
            {subhead && (
              <p
                className="subhead"
                dangerouslySetInnerHTML={{ __html: subhead }}
              />
            )}
          </Text>
        </Container>
        <PricingTabs
          pricingGroups={pricingGroups}
          pricingGroup={pricingGroup}
          setPricingGroup={setPricingGroup}
        />
      </Wrapper>
      <PricingCards cards={pricingGroup?.pricingTiers} />
    </Section>
  );
};

export default HeroPricingPage;
