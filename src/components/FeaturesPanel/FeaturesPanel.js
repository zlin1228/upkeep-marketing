import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { FeaturesPanels, FeaturesToggles, BannerContent, CallToAction, FeatureCallOut, FeatureCallToAction, FeatureContent, FeatureContentWrapper, FeatureHeading, FeatureHeadingKicker, FeatureImage, FeaturePanelsWrapper, Features, Heading, HeadingKicker, Subhead } from '../../styles/Components/FeaturesPanel/FeaturesPanel';

const FeaturePanel = (props) => {
  const [featureActive, setFeatureActive] = useState(0)
  const showFeature = (index) => {
    setFeatureActive(index)
  }

  return (
  <FeaturesPanels background={props?.component?.backgroundColor}>
    <FeaturePanelsWrapper>
    <Row className='px-2'>
      <BannerContent sm={12} md={8}>
        {props?.component?.headingKicker ? (
          <HeadingKicker color={props?.component?.headingKickerColor} className='text-center'>
            {props?.component?.headingKicker}
          </HeadingKicker>
        ) : null}
        {props?.component?.heading ? (
          <Heading className='keep-center'>{props?.component?.heading}</Heading>
        ) : null}
        {props?.component?.subhead ? (
          <Subhead dangerouslySetInnerHTML={{ __html: props?.component?.subhead }} />
        ) : null}
        <Row>
          {props?.component?.callToAction ? (
            <CallToAction 
            to={(props?.component?.callToAction?.url || '').replace('https://www.onupkeep.com', '')} 
            className="btn btn-primary px-4 mt-4"
            >
              {props?.component?.callToAction?.label}
            </CallToAction>
          ) : null}
        </Row>
      </BannerContent>
    </Row>
    <FeaturesToggles>
      {props?.component?.features?.map((feature, index) => (
        <Features xs={6} sm={6} md={6} lg={3} key={index} onClick={() => showFeature(index)}>
            {featureActive === index && (
              <FeatureCallOut></FeatureCallOut>
            )}
            <FeatureHeading>{feature?.heading}</FeatureHeading>
            <FeatureHeadingKicker className='mb-0'>{feature?.headingKicker}</FeatureHeadingKicker>
        </Features>
      ))}
    </FeaturesToggles>
    <Row>
    <FeatureContentWrapper>
      {props?.component?.features?.map((feature, index) => (
       featureActive === index ? (
        <FeatureContent key={index}>
          <Subhead dangerouslySetInnerHTML={{ __html: feature?.subhead }} />
          <FeatureCallToAction to={feature?.callToAction?.url}>{feature?.callToAction?.label}</FeatureCallToAction>
          <FeatureImage>
            <img src={feature?.featureImage?.image?.url} alt={feature?.featureImage?.image?.url} />
          </FeatureImage>
       </FeatureContent>
       ) : null
      ))}
    </FeatureContentWrapper>
    </Row>
  </FeaturePanelsWrapper>
  </FeaturesPanels>
  )
}

export default FeaturePanel