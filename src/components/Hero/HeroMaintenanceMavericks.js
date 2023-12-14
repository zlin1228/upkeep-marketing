import React from 'react';

import Breadcrumbs from '../../molecules/Breadcrumbs';
import Badge from '../../molecules/Badge';
import CallToAction from '../CallToAction';
import PodcastVideo from '../VideoComponent/PodcastVideo';
import GatsbyImage from '../Image/GatsbyImage';

import { color } from '../../atoms/colors';

import {
  InnerWrapper,
  OuterWrapper,
  Section,
  Text,
  TextLeft,
  TextRight,
} from './styles/HeroMaintenanceMavericks.styled';

const HeroMaintenanceMavericks = ({ button, heading, media, subhead }) => (
  <Section>
    <OuterWrapper>
      <Breadcrumbs />
      <InnerWrapper>
        <Text>
          <TextLeft>
            <Badge
              label="Maintenance Mavericks"
              size="lg"
              backgroundColor={color.midnight[50]}
              textColor={color.blue[900]}
            />
            {heading && <h1 className="heading">{heading}</h1>}
          </TextLeft>
          <TextRight>
            {subhead && (
              <div
                className="subhead"
                dangerouslySetInnerHTML={{ __html: subhead }}
              />
            )}
            {button && (
              <CallToAction {...button} variant="Filled - Steel" size="md" />
            )}
          </TextRight>
        </Text>
        <div className="media">
          {media?.internal?.type === 'DatoCmsWebsiteVideo' && (
            <PodcastVideo component={media} />
          )}
          {media?.internal?.type === 'DatoCmsWebsiteImage' && (
            <GatsbyImage src={media?.image?.gatsbyImageData} alt={media?.alt} />
          )}
        </div>
      </InnerWrapper>
    </OuterWrapper>
  </Section>
);

export default HeroMaintenanceMavericks;
