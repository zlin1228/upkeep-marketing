import React, { useState } from 'react';
import CallToAction from '../CallToAction';
import GatsbyImage from '../Image/GatsbyImage';
import FormGenerator from '../Forms/index';
import Modal from '../Modal';
import {
  Section,
  BackgroundGradient,
  Wrapper,
  Text,
  Buttons,
  Button,
  Content,
} from './styles/HeroBookPage.styled';

const HeroBookPage = ({ component }) => {
  const [showFormModal, setShowFormModal] = useState(false);

  if (!component) return null;
  const {
    heading,
    subhead,
    callToAction,
    secondCallToAction,
    formCallToAction,
    featuredImage,
  } = component;

  return (
    <>
      <Modal showModal={showFormModal} setShowModal={setShowFormModal}>
        <FormGenerator
          props={formCallToAction?.form}
          setShowFormModal={setShowFormModal}
        />
      </Modal>
      <Section>
        <BackgroundGradient />
        <Wrapper>
          <Text>
            {heading && <h1 className="heading">{heading}</h1>}
            {subhead && (
              <div
                className="subhead"
                dangerouslySetInnerHTML={{ __html: subhead }}
              />
            )}
            <Buttons>
              {formCallToAction && (
                <Button onClick={() => setShowFormModal(true)}>
                  {formCallToAction?.label}
                </Button>
              )}
              {callToAction && (
                <CallToAction
                  url={callToAction?.url}
                  label={callToAction?.label}
                  variant="Red-Light-Outlined"
                  size="xxl"
                />
              )}
              {secondCallToAction && (
                <CallToAction
                  url={secondCallToAction?.url}
                  label={secondCallToAction?.label}
                  variant="Red-Light-Outlined"
                  size="xxl"
                />
              )}
            </Buttons>
          </Text>
          {featuredImage?.image?.gatsbyImageData && (
            <Content>
              <GatsbyImage
                src={featuredImage?.image?.gatsbyImageData}
                alt={featuredImage?.image?.alt}
              />
            </Content>
          )}
        </Wrapper>
      </Section>
    </>
  );
};

export default HeroBookPage;
