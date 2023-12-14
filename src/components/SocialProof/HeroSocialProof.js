import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Icon from '../../molecules/Icon';
import { Wrapper, Stars, Logos, Logo } from './styles/HeroSocialProof';
import { color } from '../../atoms/colors';

const stars = [1, 2, 3, 4, 5];
const HeroSocialProof = ({ data, theme }) => {
  const { t } = useTranslation();

  return (
    <Wrapper className="social-proof-wrapper">
      <Stars className="social-proof-stars" theme={theme}>
        {stars.map(star => (
          <Icon
            key={star}
            id="fa-solid fa-star"
            width="25px"
            height="25px"
            fillColor={color.yellow[700]}
          />
        ))}
        <p>{t('Based on 1,500+ reviews')}</p>
      </Stars>
      <Logos className="social-proof-logos">
        {data.socialProof.map(item => (
          <Logo
            key={item?.image.url}
            src={item?.image.url}
            alt={item?.internalName}
            loading="eager"
          />
        ))}
      </Logos>
    </Wrapper>
  );
};

export default HeroSocialProof;
