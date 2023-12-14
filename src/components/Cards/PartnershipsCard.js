import React, { useRef } from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import CallToAction from '../CallToAction';
import useIsHovered from '../../hooks/useIsHovered';
import {
  Container,
  Overlay,
  Image,
} from '../../styles/Components/Cards/PartnershipsCard.styled';

const PartnershipsCard = ({ slug, company, category }) => {
  const cardRef = useRef(null);
  const isHovered = useIsHovered(cardRef);
  return (
    <Container ref={cardRef} className="partnerships-card">
      <CallToAction url={`/partnerships/${slug}`} variant="Clickable" />
      <Overlay isHovered={isHovered}>
        {category?.internalName && (
          <p className="category">{category?.internalName}</p>
        )}
        {company?.name && <p className="heading">{company.name}</p>}
      </Overlay>
      <Image>
        <GatsbyImage
          src={company?.logo?.image?.gatsbyImageData}
          alt={company?.name || 'Logo'}
        />
      </Image>
    </Container>
  );
};

export default PartnershipsCard;
