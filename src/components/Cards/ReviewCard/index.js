import React from 'react';
import CallToAction from '../../CallToAction';
import InlineVideo from '../../../molecules/InlineVideo';
import { formatDetails, formatReviewer, renderRating } from './utils';
import {
  Container,
  Rating,
  Text,
  Linebreak,
  Details,
  Detail,
} from './styles/index.styled';

const ReviewCard = ({ component }) => {
  if (!component) return null;
  const {
    internalName,
    title,
    review,
    keyFeatures,
    rating,
    source,
    reviewSourceUrl,
    industry,
    reviewer,
    video,
  } = component;
  const { name, role } = formatReviewer(reviewer);
  const { details } = formatDetails(
    keyFeatures,
    industry,
    source,
    reviewSourceUrl
  );

  return (
    <Container className="post">
      <Rating className="rating">{renderRating(rating)}</Rating>
      <Text>
        {title || internalName ? (
          <p className="heading">{title || internalName}</p>
        ) : null}
        {review && <p className="subhead">{review}</p>}
        {name || role ? (
          <div className="author">
            {name && (
              <p className="name">
                {name}
                {role && ','}
              </p>
            )}
            {role && <p className="role">{role}</p>}
          </div>
        ) : null}
      </Text>
      <InlineVideo
        youtubeURL={video?.youtubeUrl}
        thumbnail={video?.videoThumbnail?.image?.gatsbyImageData}
      />
      <Linebreak />
      <Details>
        {details?.map(({ heading, subhead, button }) => (
          <Detail key={heading}>
            {heading && <p className="heading">{heading}</p>}
            {subhead && (
              <div
                className="subhead"
                dangerouslySetInnerHTML={{ __html: subhead }}
              />
            )}
            {button && (
              <CallToAction
                variant="Red-Arrow-Link"
                icon="fa-solid fa-chevron-right"
                url={button?.url}
                label={button?.label}
              />
            )}
          </Detail>
        ))}
      </Details>
    </Container>
  );
};

export default ReviewCard;
