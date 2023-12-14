import React from 'react';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import Subscriptions from '../Subscriptions';
import LiteYoutube from '../Lite-Youtube/LiteYoutube';
import { getYoutubeId } from '../../utils/getYoutubeId';
import {
  Section,
  OuterWrapper,
  InnerWrapper,
  Text,
  HeadingKicker,
  Heading,
  Subhead,
  Video,
} from './styles/HeroPodcastsListing.styled';

const HeroPodcastsListing = ({ component }) => {
  const featuredPodcast = component?.featuredPodcast?.podcastVideo?.[0];
  const videoId = getYoutubeId(featuredPodcast?.websiteVideo?.youtubeUrl);
  return (
    <Section>
      <OuterWrapper>
        <Breadcrumbs theme="Light" />
        <InnerWrapper>
          <Text>
            {component?.headingKicker && (
              <HeadingKicker>{component?.headingKicker}</HeadingKicker>
            )}
            {component?.heading && (
              <Heading
                dangerouslySetInnerHTML={{ __html: component?.heading }}
              />
            )}
            {component?.subhead && (
              <Subhead
                dangerouslySetInnerHTML={{ __html: component?.subhead }}
              />
            )}
            <Subscriptions heading="Subscribe to us on:" />
          </Text>
          <Video>
            <LiteYoutube videoId={videoId} />
          </Video>
        </InnerWrapper>
      </OuterWrapper>
    </Section>
  );
};

export default HeroPodcastsListing;
