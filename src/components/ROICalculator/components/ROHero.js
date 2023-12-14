import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  Hero,
  HeroWrapper,
  BreadcrumbsWrapper,
  HeadingKicker,
  Heading,
  Subhead,
} from '../styles/ROIHero.styled';
import Breadcrumbs from '../../../molecules/Breadcrumbs';

const ROIHero = ({ content, theme }) => {
  const { t } = useTranslation();

  return (
    <Hero className="banner">
      <HeroWrapper
        className={`banner-wrapper ${theme || 'dark'}${
          content?.align ? ` keep-${content?.align}` : ' keep-center'
        }`}
      >
        <Container>
          <BreadcrumbsWrapper>
            <Breadcrumbs theme="Dark" />
          </BreadcrumbsWrapper>
          <HeadingKicker color="Blue">{t('ROI CALCULATOR')}</HeadingKicker>
          <Heading
            className={
              content?.align ? `keep-${content?.align}` : 'keep-center'
            }
          >
            {t('The return on investment of using a CMMS')}
          </Heading>
          <Subhead>
            {t(
              'By answering a few simple questions, you can determine the return on investment of using UpKeep’s computerized maintenance management system.'
            )}
          </Subhead>
        </Container>
      </HeroWrapper>
    </Hero>
  );
};

export default ROIHero;
