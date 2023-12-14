import React from 'react';
import CallToAction from '../../CallToAction';
import {
  HeadingKicker,
  Heading,
  Subhead,
  Buttons,
  Button,
} from '../styles/index.styled';

const AccordionHeading = ({
  type,
  component: {
    showHeadingKicker,
    headingKickerColor,
    headingKicker,
    heading,
    subhead,
    primaryCallToAction,
    secondaryCallToAction,
  },
}) => (
  <div className="accordion-heading">
    {showHeadingKicker && (
      <HeadingKicker color={headingKickerColor}>{headingKicker}</HeadingKicker>
    )}
    {heading && <Heading>{heading}</Heading>}
    {subhead && (
      <Subhead
        className="subhead"
        dangerouslySetInnerHTML={{ __html: subhead }}
      />
    )}
    {(primaryCallToAction || secondaryCallToAction) && (
      <Buttons type={type}>
        {primaryCallToAction && (
          <CallToAction
            url={primaryCallToAction?.url}
            label={primaryCallToAction?.label}
            variant="Red"
            styles={Button}
          />
        )}
        {secondaryCallToAction && (
          <CallToAction
            url={secondaryCallToAction?.url}
            label={secondaryCallToAction?.label}
            variant="Red-Outlined"
            styles={Button}
          />
        )}
      </Buttons>
    )}
  </div>
);

export default AccordionHeading;
