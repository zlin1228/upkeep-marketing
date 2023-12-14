import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import CallToAction from '../CallToAction';
import GatsbyImage from '../Image/GatsbyImage';
import FallbackImage from '../Fallbacks/FallbackImage';
import Author from '../Author/Author';
import limitWordCount from '../../utils/limitWordCount';
import {
  Frame,
  Body,
  Details,
  Image,
  Excerpt,
  Tags,
  Title,
} from '../../styles/Components/Cards/EventCard';

const EventCard = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Frame className="event-card">
      <CallToAction
        url={data?.eventRegistration?.url || `/events/${data?.slug}`}
        classes="clickable"
      />
      <Image>
        {data?.thumbnailImage?.image?.gatsbyImageData ? (
          <GatsbyImage
            src={data?.thumbnailImage?.image?.gatsbyImageData}
            alt={data?.thumbnailImage?.image?.alt}
          />
        ) : (
          <FallbackImage />
        )}
      </Image>
      <Body>
        <Details>
          <Tags>
            <strong>{t('Event')}</strong>
            {data?.eventStatus === 'on-demand' && (
              <strong>{t('On Demand')}</strong>
            )}
            {data?.eventStatus === 'upcoming' ||
            data?.eventStatus === 'live-event' ? (
              <strong>
                {data?.startDate} {data?.endDate && `- ${data?.endDate}`}
              </strong>
            ) : null}
          </Tags>
          <Title>{data?.title}</Title>
          <Excerpt
            dangerouslySetInnerHTML={{
              __html: limitWordCount(data?.description, 20, true),
            }}
          />
        </Details>
        <Author author={data?.authors[0]} />
      </Body>
    </Frame>
  );
};

export default EventCard;
