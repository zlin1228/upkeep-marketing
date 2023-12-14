import React, { useRef } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import CallToAction from '../CallToAction';
import GatsbyImage from '../Image/GatsbyImage';
import limitWordCount from '../../utils/limitWordCount';
import useIsHovered from '../../hooks/useIsHovered';
import {
  Frame,
  Image,
  Body,
  Text,
} from '../../styles/Components/Cards/CustomersCard.styled';

const CustomersCard = ({ component }) => {
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const isHovered = useIsHovered(cardRef);

  return (
    <Frame ref={cardRef}>
      <CallToAction
        url={`/product/customers/${component?.slug}`}
        variant="Clickable"
      />
      {component?.metaTags?.image?.gatsbyImageData && (
        <Image>
          <GatsbyImage
            src={component?.metaTags?.image?.gatsbyImageData}
            alt={component?.internalName}
          />
        </Image>
      )}
      <Body>
        <Text>
          <p className="heading-kicker">{component?.industry?.name}</p>
          <p className="heading">{component?.internalName}</p>
          <p className="subhead">{limitWordCount(component?.excerpt, 20)}</p>
        </Text>
        <CallToAction
          variant="Red-Arrow-Link"
          url={`/product/customers/${component?.slug}`}
          icon="fa-solid fa-chevron-right"
          classes={isHovered ? 'hovered' : ''}
          label={t('Learn More')}
        />
      </Body>
    </Frame>
  );
};

export default CustomersCard;
