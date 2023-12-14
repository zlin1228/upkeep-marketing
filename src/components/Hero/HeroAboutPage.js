import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import CallToAction from '../CallToAction';
import {
  Section,
  Wrapper,
  Text,
  Grid,
  Image,
} from './styles/HeroAboutPage.styled';

const HeroAboutPage = ({
  component: { heading, subhead, callToAction, multipleImages },
}) => (
  <Section>
    <Wrapper>
      <Breadcrumbs theme="Red-Light" />
      <Text>
        {heading && <h1 className="heading">{heading}</h1>}
        <div className="subhead-wrapper">
          {subhead && (
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: subhead }}
            />
          )}
          {callToAction?.url && (
            <CallToAction
              {...callToAction}
              variant="Red"
              size="xl"
              icon="fa-solid fa-chevron-right"
              classes="call-to-action"
            />
          )}
        </div>
      </Text>
    </Wrapper>
    {multipleImages && multipleImages.length > 0 ? (
      <Grid>
        {multipleImages.map(({ id, image }) => (
          <Image key={id} className="image">
            <GatsbyImage src={image?.gatsbyImageData} alt={image?.alt} />
          </Image>
        ))}
      </Grid>
    ) : null}
  </Section>
);

export default HeroAboutPage;
