import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import Author from '../Author/Author';
import {
  Frame,
  Clickable,
  Image,
  Body,
  Text,
} from '../../styles/Components/Cards/PodcastsCard.styled';

const PodcastsCard = ({ data }) => (
  <Frame className="podcasts-card">
    <Clickable to={`/podcasts/${data?.slug}`} aria-label={data?.heading} />
    <Image>
      <GatsbyImage
        src={data?.metaTags?.image?.gatsbyImageData}
        alt={data?.metaTags?.image?.alt || data?.heading}
      />
    </Image>
    <Body>
      <Text>
        <h5>{data?.categories?.name}</h5>
        {data?.heading && <h3>{data?.heading}</h3>}
        {data?.subhead && (
          <div dangerouslySetInnerHTML={{ __html: data?.subhead }} />
        )}
      </Text>
      <Author author={data?.authorS?.[0]} />
    </Body>
  </Frame>
);

export default PodcastsCard;
