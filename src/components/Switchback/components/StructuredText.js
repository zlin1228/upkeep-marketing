import React from 'react';
import { StructuredText as Subhead } from 'react-datocms';

import GatsbyImage from '../../Image/GatsbyImage';
import InlineVideo from '../../../molecules/InlineVideo';
import ListItem from '../../../molecules/ListItem';
import Statistics from '../../../molecules/Statistics';
import Testimonial from '../../../molecules/Testimonial';

import { Container, Asset } from '../styles/StructuredText.styled';

const StructuredText = ({ theme, subhead }) => {
  let count = 0;
  return (
    <Container theme={theme}>
      <Subhead
        data={subhead}
        renderInlineRecord={({ record }) => {
          switch (record?.internal?.type) {
            case 'DatoCmsWebsiteImage':
              return (
                <Asset key={record?.id}>
                  <GatsbyImage
                    src={record?.image?.gatsbyImageData}
                    alt={record?.image?.alt}
                  />
                </Asset>
              );
            case 'DatoCmsWebsiteVideo':
              return (
                <Asset key={record?.id}>
                  <InlineVideo
                    youtubeURL={record?.youtubeUrl}
                    thumbnail={record?.videoThumbnail?.image?.gatsbyImageData}
                  />
                </Asset>
              );
            case 'DatoCmsMoleculeListItem':
              count++;
              return (
                <Asset
                  key={record?.id}
                  className="list-item"
                  theme={theme}
                  count={count}
                  numOfItems={subhead?.links?.length}
                >
                  <ListItem
                    theme={theme}
                    icon={record?.icon}
                    heading={record?.heading}
                    subhead={record?.subhead}
                  />
                </Asset>
              );
            case 'DatoCmsStatisticsMolecule':
              return (
                <Asset key={record?.id} className="statistic">
                  <Statistics theme={theme} {...record} />
                </Asset>
              );
            case 'DatoCmsTestimonial':
              return (
                <Asset key={record?.id} className="testimonial">
                  <Testimonial theme={theme} {...record} />
                </Asset>
              );
            default:
              return null;
          }
        }}
      />
    </Container>
  );
};

export default StructuredText;
