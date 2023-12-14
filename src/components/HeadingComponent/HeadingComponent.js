import React from 'react';
import CallToAction from '../CallToAction';
import {
  Container,
  Wrapper,
  Kicker,
  Heading,
  Subhead,
  Buttons,
  Top,
  Bottom,
} from './styles/HeadingComponent.styled';

const HeadingComponent = ({
  theme,
  alignment,
  headingKicker,
  heading,
  subhead,
  primaryButton,
  primaryButtonVariant,
  primaryButtonSize,
  secondaryButton,
  secondaryButtonVariant,
  secondaryButtonSize,
  styles,
  primaryNextIcon,
}) => (
  <Container className="heading-container" alignment={alignment || 'center'}>
    <Wrapper
      className="heading-container"
      alignment={alignment || 'center'}
      styles={styles}
    >
      {(headingKicker || heading) && (
        <Top alignment={alignment || 'center'}>
          {headingKicker && <Kicker theme={theme}>{headingKicker}</Kicker>}
          {heading && <Heading theme={theme}>{heading}</Heading>}
        </Top>
      )}
      <Bottom alignment={alignment || 'center'}>
        {subhead && (
          <Subhead
            alignment={alignment || 'center'}
            theme={theme}
            dangerouslySetInnerHTML={{ __html: subhead }}
          />
        )}
        {(primaryButton || secondaryButton) && (
          <Buttons alignment={alignment || 'center'}>
            {primaryButton && (
              <CallToAction
                variant={primaryButtonVariant || 'Filled - Red'}
                size={primaryButtonSize || 'xxl'}
                nextIcon={primaryNextIcon}
                {...primaryButton}
              />
            )}
            {secondaryButton && (
              <CallToAction
                variant={secondaryButtonVariant || 'Outline - Dark'}
                size={secondaryButtonSize || 'xxl'}
                {...secondaryButton}
              />
            )}
          </Buttons>
        )}
      </Bottom>
    </Wrapper>
  </Container>
);

export default HeadingComponent;
