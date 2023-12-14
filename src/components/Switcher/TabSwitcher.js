import React, { useRef, useState } from 'react';
import {
  Section,
  Logo,
  HeadingWrapper,
  Heading,
  Subheading,
  SlidesWrapper,
  Buttons,
  BackgroundImage,
} from './styles/TabSwitcher.styled';

import TabSwitcherSlide from './components/TabSwitcherSlide';
import TabSwitcherControls from './components/TabSwitcherControls';
import CallToAction from '../CallToAction';
import useParallaxEffect from '../../hooks/useParallaxEffect';

const TabSwitcher = ({ component }) => {
  const backgroundRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useParallaxEffect(backgroundRef);

  return (
    <Section theme={component?.backgroundColor || 'white'}>
      <BackgroundImage
        ref={backgroundRef}
        className="background-image"
        loading="eager"
      />
      <HeadingWrapper>
        {component?.logo.image?.url && (
          <Logo
            src={component?.logo.image?.url}
            alt={component?.logo.image?.alt}
          />
        )}
        {component?.heading && <Heading>{component?.heading}</Heading>}
        {component?.subhead && <Subheading>{component?.subhead}</Subheading>}
        {(component?.primaryCallToAction ||
          component?.secondaryCallToAction) && (
          <Buttons>
            <CallToAction
              {...component?.primaryCallToAction}
              variant="Filled - Steel"
              size="xl"
            />
            <CallToAction
              {...component?.secondaryCallToAction}
              variant="Outline Dark - Transparent"
              size="xxl"
            />
          </Buttons>
        )}
      </HeadingWrapper>
      <SlidesWrapper activeIndex={activeIndex}>
        {component?.tabSwitcherSlide?.map((item, index) => (
          <TabSwitcherSlide
            key={item?.id}
            component={item}
            index={index}
            activeIndex={activeIndex}
          />
        ))}
        <TabSwitcherControls
          component={component}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </SlidesWrapper>
    </Section>
  );
};

export default TabSwitcher;
