import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import GatsbyImage from '../../components/Image/GatsbyImage';
import FiveStars from './assets/five-stars.svg';
import { Container, Rating, Logos } from './styles/index.styled';

const SocialProof = ({ showRating, heading, logos }) => {
  const { t } = useTranslation();

  return (
    <Container className="social-proof">
      {showRating && (
        <Rating className="rating">
          <GatsbyImage src={FiveStars} alt="Stars" />
          <p>{heading || t('Based on 1,500+ reviews')}</p>
        </Rating>
      )}
      <Logos className="social-proof-logos">
        {logos &&
          logos.map(logo => (
            <GatsbyImage
              key={logo?.internalName}
              src={logo?.image?.url}
              alt={logo?.internalName}
            />
          ))}
      </Logos>
    </Container>
  );
};

export default SocialProof;
