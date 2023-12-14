import React, { useRef } from 'react';

import Header from './components/Header';
import OldSwitchback from '../Switchback/Old-Switchback';
import Switchback from '../Switchback';

import useParallaxEffect from '../../hooks/useParallaxEffect';

import { Section, Container, BackgroundImage } from './styles/index.styled';

const Grid = ({ component }) => {
  const headerRef = useRef(null);
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);

  if (!component) return null;
  const { contentBlock } = component;

  return (
    <Section backgroundColor={component?.theme}>
      {component?.showParallaxGrid && (
        <BackgroundImage
          ref={backgroundRef}
          className="background-image"
          loading="eager"
        />
      )}
      <Header
        component={component}
        theme={component?.theme}
        headerRef={headerRef}
        fullwidthImage={component?.fullwidthImage}
      />
      {contentBlock && contentBlock.length > 0 ? (
        <Container>
          {contentBlock?.map((block, index) => {
            if (!block) return null;
            switch (block.__typename) {
              case 'DatoCmsContentBlockComponent':
                return <OldSwitchback key={block?.id} component={block} />;
              case 'DatoCmsComponentSwitchback':
                return (
                  <Switchback
                    key={block?.id}
                    theme={component?.theme}
                    component={block}
                    headerRef={headerRef}
                    lastSwitchback={index === contentBlock.length - 1}
                  />
                );
              default:
                return null;
            }
          })}
        </Container>
      ) : null}
    </Section>
  );
};

export default Grid;
