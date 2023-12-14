import React, { useRef } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import GatsbyImage from '../../../../Image/GatsbyImage';
import FallbackImage from '../../../../Fallbacks/FallbackImage';
import {
  Frame,
  Clickable,
  CardHeader,
  CardBody,
} from '../styles/IntegrationCard';
import CallToAction from '../../../../CallToAction';
import useIsHovered from '../../../../../hooks/useIsHovered';

const IntegrationCard = ({ integration }) => {
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const isHovered = useIsHovered(cardRef);

  return (
    <Frame ref={cardRef}>
      <Clickable to={`/integrations/${integration?.slug}`} />
      <CardHeader className="card_header">
        {integration?.thumbnailImage ? (
          <GatsbyImage
            src={integration?.thumbnailImage?.gatsbyImageData}
            alt={integration?.thumbnailImage?.alt}
          />
        ) : (
          <FallbackImage />
        )}
      </CardHeader>
      <CardBody className="card_body">
        <div className="details">
          <div className="title_row">
            <strong className="title">{integration?.internalName}</strong>
            {integration.prefferedIntegration && (
              <div className="preferred_tag">{t('Preffered')}</div>
            )}
          </div>
          <div className="details_body">
            {integration?.metaTags?.description}
          </div>
          <div className="cta">
            <CallToAction
              url={`/integrations/${integration?.slug}`}
              label={t('View Integration')}
              variant="Link - Dark"
              icon="fa-solid fa-chevron-right"
              classes={isHovered ? 'hovered' : ''}
            />
          </div>
        </div>
      </CardBody>
    </Frame>
  );
};

export default IntegrationCard;
