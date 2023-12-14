import React from 'react';

import Media from './components/Media';
import Content from './components/Content';

import useOffset from './utils/useOffset';

import { Container, Wrapper } from './styles/index.styled';

const Switchback = ({
  theme,
  component: {
    layout,
    reverse,
    headingKicker,
    heading,
    structuredText,
    primaryButton,
    secondaryButton,
    primaryLink,
    reference,
  },
  headerRef,
  lastSwitchback,
}) => {
  const offset = useOffset(headerRef);
  const videoLayout = reference?.__typename === 'DatoCmsWebsiteVideo';

  return (
    <Container lastSwitchback={lastSwitchback}>
      <Wrapper
        layout={videoLayout ? 'contained' : layout}
        offset={offset}
        reverse={reverse}
        reference={reference}
        backgroundColor={theme}
      >
        {reverse ? (
          <>
            <Media reference={reference} reverse={reverse} layout={layout} />
            <Content
              theme={theme}
              reverse={reverse}
              headingKicker={headingKicker}
              heading={heading}
              structuredText={structuredText}
              primaryButton={primaryButton}
              secondaryButton={secondaryButton}
              primaryLink={primaryLink}
            />
          </>
        ) : (
          <>
            <Content
              theme={theme}
              reverse={reverse}
              headingKicker={headingKicker}
              heading={heading}
              structuredText={structuredText}
              primaryButton={primaryButton}
              secondaryButton={secondaryButton}
              primaryLink={primaryLink}
            />
            <Media reference={reference} reverse={reverse} layout={layout} />
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Switchback;
