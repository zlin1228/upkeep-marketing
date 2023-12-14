import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import {
  Frame,
  Head,
  Thumbnail,
  Body,
  Details,
  Heading,
  Subhead,
  TagsWrapper,
  TagsOverlay,
  Tags,
  CallToAction,
  LinkOverlay,
} from '../../styles/Components/Cards/PodcastCard';

const PodcastCard = ({ card }) => (
  <Frame className="card-frame">
    <LinkOverlay to={`/podcasts/${card?.slug}`} />
    <Head>
      <Thumbnail className="card-thumbnail">
        <GatsbyImage
          imageStyle={{ objectFit: `cover` }}
          src={card?.metaTags?.image?.gatsbyImageData}
          alt="Life At UpKeep"
          className="w-100 h-100"
        />
      </Thumbnail>
    </Head>
    <Body className="card-body">
      <Details className="card-details">
        <TagsWrapper className="card-tags-wrapper">
          <TagsOverlay className="card-tags-overlay" />
          <Tags className="card-tags">
            <h6>Podcast</h6>
            <h6>Life At UpKeep</h6>
          </Tags>
        </TagsWrapper>
        {card?.heading && (
          <Heading className="card-heading">{card?.heading}</Heading>
        )}
        {card?.subhead && (
          <Subhead
            className="card-subhead"
            dangerouslySetInnerHTML={{ __html: card?.subhead }}
          />
        )}
      </Details>
      {card?.callToAction && (
        <CallToAction
          className="card-call-to-action"
          to={card?.callToAction?.url}
        >
          {card?.callToAction?.label}
        </CallToAction>
      )}
    </Body>
  </Frame>
);

export default PodcastCard;
