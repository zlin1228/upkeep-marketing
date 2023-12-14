import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import Author from '../Author/Author';
import {
  CardFrame,
  CardHead,
  CardCategory,
  CardBody,
  AuthorWrapper,
  Clickable,
} from '../../styles/Components/Cards/ComparisonCard';

const ComparisonCard = ({ item, contentType }) => (
  <CardFrame className="card_frame" resourcetype={contentType}>
    <Clickable to={`${item?.slug}`} />
    <CardHead className="card_head">
      {item?.thumbnail && (
        <GatsbyImage
          imageStyle={{ objectFit: `cover` }}
          src={item?.thumbnail}
          alt={item?.heading}
          className="w-100 h-100"
        />
      )}
    </CardHead>
    <CardBody className="card_body" resourcetype={contentType}>
      <CardCategory>
        <div className="card_kicker">CMMS Software</div>
        <div className="card_category">{item?.downloadType}</div>
      </CardCategory>
      <h4 className="card_title">{item?.heading}</h4>
      <div
        className="card_description"
        dangerouslySetInnerHTML={{
          __html: item?.subhead,
        }}
      />
    </CardBody>
    <AuthorWrapper>
      <Author author={item?.author} />
    </AuthorWrapper>
  </CardFrame>
);

export default ComparisonCard;
