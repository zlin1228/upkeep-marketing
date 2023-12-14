import React from 'react';
import ReviewIcons from './ReviewIcons';
import { Section, Wrapper, HeadingKicker } from './styles/ReviewBar';

const ReviewBar = ({ component }) => (
  <Section theme={component?.theme}>
    <Wrapper>
      {component?.showHeadingKicker && (
        <HeadingKicker color={component?.headingKickerColor}>
          {component?.headingKicker}
        </HeadingKicker>
      )}
      <h2>{component?.heading}</h2>
      <div
        className="subhead"
        dangerouslySetInnerHTML={{ __html: component?.subhead }}
      />
      <ReviewIcons icons={component.socialProofIcon} />
    </Wrapper>
  </Section>
);

export default ReviewBar;
