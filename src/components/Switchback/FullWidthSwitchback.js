import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import {
  Section,
  Wrapper,
  Details,
  HeadingKicker,
  Heading,
  Subhead,
  FeaturedContent,
} from '../../styles/Components/Switchback/FullWidthSwitchback';

const Switchback = props => {
  const content = props?.component?.contentBlock[0];
  return (
    <Section background={content?.backgroundColor}>
      <Wrapper reversed={content?.reverse}>
        <Details reversed={content?.reverse} lg={6} className="content">
          {content?.showHeadingKicker && (
            <HeadingKicker color={content?.headingKickerColor}>
              {content?.headingKicker}
            </HeadingKicker>
          )}
          <Heading>{content?.heading}</Heading>
          <Subhead
            className="subhead-block"
            dangerouslySetInnerHTML={{ __html: content?.subhead }}
          />
        </Details>
        <FeaturedContent reversed={content?.reverse}>
          <GatsbyImage
            src={content?.featuredContent?.image?.gatsbyImageData}
            alt={content?.featuredContent?.image?.alt}
          />
        </FeaturedContent>
      </Wrapper>
    </Section>
  );
};

export default Switchback;
