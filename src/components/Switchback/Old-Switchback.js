import React, { useEffect, useState } from 'react';
import Lottie from '../Lottie/Lottie';
import GatsbyImage from '../Image/GatsbyImage';
import CallToAction from '../CallToAction';
import SubscriptionProof from '../SocialProof/SubscriptionProof';
import {
  Container,
  Wrapper,
  FeaturedContent,
  Details,
  Row,
  HeadingKicker,
  Heading,
  Subhead,
  SpecialCallToAction,
  ArrowLink,
} from './styles/Old-Switchback';
import { switchbacksIds, switchbackCTAs } from './utils/renderSpecialCTA';
import fetchAnimation from '../Lottie/utils/fetchAnimation';
import InlineVideo from '../../molecules/InlineVideo';
import CardDeck from '../CardDeck/CardDeck';
import { getYoutubeId } from '../../utils/getYoutubeId';

const Switchback = ({ component, index, numOfSwitchbacks }) => {
  const [animation, setAnimation] = useState();
  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (component?.featuredContent?.lottie) {
      fetchAnimation(component?.featuredContent?.lottie?.url, setAnimation);
    }
  }, []);

  if (!component) return null;
  return (
    <Container>
      <Wrapper
        className="switchback-wrapper"
        reverse={component?.reverse}
        index={index}
        numOfSwitchbacks={numOfSwitchbacks}
      >
        <Details>
          {component?.headingKicker && (
            <HeadingKicker className="eyebrow">
              {component?.headingKicker}
            </HeadingKicker>
          )}
          {component?.heading && (
            <Heading dangerouslySetInnerHTML={{ __html: component?.heading }} />
          )}
          {component?.subhead && (
            <Subhead
              className="subhead-block"
              dangerouslySetInnerHTML={{ __html: component?.subhead }}
            />
          )}
          <Row>
            {switchbacksIds.includes(component?.id) && (
              <SpecialCallToAction
                rel="noopener norefferer"
                target="_blank"
                href={switchbackCTAs[component?.id]?.url}
              >
                <img
                  loading="lazy"
                  src={switchbackCTAs[component?.id]?.icon}
                  alt="icon"
                />
                {switchbackCTAs[component?.id]?.label}
              </SpecialCallToAction>
            )}
            {component?.callToAction && (
              <CallToAction
                url={component?.callToAction?.url}
                label={component?.callToAction?.label}
                variant="Red"
                size="xl"
              />
            )}
            {component?.secondaryCallToAction && (
              <CallToAction
                url={component?.secondaryCallToAction?.url}
                label={component?.secondaryCallToAction?.label}
                variant="Link - Red"
                icon="fa-solid fa-chevron-right"
                size="xl"
                styles={ArrowLink}
              />
            )}
            {component?.tertiaryCallToAction && (
              <CallToAction
                url={component?.tertiaryCallToAction?.url}
                label={component?.tertiaryCallToAction?.label}
                variant="Red-Outlined"
                size="xl"
              />
            )}
          </Row>
          {component?.showSubscriptionLinks && <SubscriptionProof />}
        </Details>
        <FeaturedContent>
          {component?.featuredContent?.image && (
            <GatsbyImage
              src={
                component?.featuredContent?.image?.gatsbyImageData ||
                component?.featuredContent?.image?.url
              }
              alt={component?.featuredContent?.image?.alt}
            />
          )}
          {component?.featuredContent?.internal?.type ===
            'DatoCmsVideoModalComponent' && (
            <InlineVideo
              data={component?.featuredContent}
              videoId={getYoutubeId(
                component?.featuredContent?.video?.youtubeUrl
              )}
              play={play}
              setPlay={setPlay}
            />
          )}
          {component?.featuredContent?.lottie && (
            <Lottie
              onScroll
              animation={animation}
              delay={250}
              loop={false}
              autoplay={false}
              topOffset="90%"
              bottomOffset="0px"
            />
          )}
        </FeaturedContent>
      </Wrapper>
      {component?.cards?.length !== 0 && (
        <CardDeck component={{ card: component?.cards }} />
      )}
    </Container>
  );
};

export default Switchback;
