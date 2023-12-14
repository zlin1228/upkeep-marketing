import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import limitWordCount from '../../utils/limitWordCount';
import {
  Container,
  Clickable,
  Thumbnail,
  Body,
  Details,
  Category,
} from '../../styles/Components/Cards/DownloadCard';

const DownloadCard = ({ component }) => (
  <Container className="download-card">
    <Clickable to={`/downloads/${component?.slug}`} />
    <Thumbnail>
      {component?.thumbnailImage && (
        <GatsbyImage
          src={component?.thumbnailImage.gatsbyImageData}
          alt={component?.thumbnailImage?.alt}
        />
      )}
    </Thumbnail>
    <Body>
      <Details>
        <Category>
          <h6 className="card_type">Download</h6>
          <h6 className="card_category">{component?.downloadsType?.name}</h6>
        </Category>
        <h4 className="card_title">{component?.title}</h4>
        <p className="card_description">
          {limitWordCount(component?.description, 24)}
        </p>
      </Details>
    </Body>
  </Container>
);

export default DownloadCard;
