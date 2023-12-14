import React, { useEffect, useRef } from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import Author from '../Author/Author';
import {
  CardFrame,
  CardHead,
  CardCategory,
  CardBody,
  AuthorWrapper,
  Clickable,
} from '../../styles/Components/Cards/ResourceCard';
import limitWordCount from '../../utils/limitWordCount';

const ResourceCard = ({ item, contentType, currentPage }) => {
  const itemSubhead = useRef();
  useEffect(() => {
    if (itemSubhead.current.innerText) {
      itemSubhead.current.innerText = limitWordCount(
        itemSubhead.current.innerText,
        17
      );
    }
  }, [currentPage]);

  return (
    <CardFrame className="card_frame" resourcetype={contentType}>
      <Clickable to={`/downloads/${item?.slug}`} />
      <CardHead className="card_head">
        {item?.thumbnailImage && (
          <GatsbyImage
            imageStyle={{ objectFit: `cover` }}
            src={item?.thumbnailImage?.gatsbyImageData}
            alt={item?.thumbnailImage?.alt}
            className="w-100 h-100"
          />
        )}
        {item.thumbnail && <img src={item.thumbnail} alt="" />}
      </CardHead>
      <CardBody className="card_body" resourcetype={contentType}>
        <CardCategory>
          <div className="card_type">{contentType} </div>
          <div className="card_category">{item?.downloadType}</div>
        </CardCategory>
        <h4 className="card_title">{limitWordCount(item?.title, 11)}</h4>
        <div
          className="card_description"
          ref={itemSubhead}
          dangerouslySetInnerHTML={{
            __html: item?.description,
          }}
        />
      </CardBody>
      <AuthorWrapper>
        <Author author={item?.author} />
      </AuthorWrapper>
    </CardFrame>
  );
};

export default ResourceCard;
