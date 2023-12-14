import React from 'react';
import CallToAction from '../../CallToAction';
import SocialProofImages from '../SocialProofImages';
import useDefaultSocialProof from '../utils/useDefaultSocialProof';
import { Section, Wrapper, Header, Text, Buttons } from '../styles/SocialProof';

const SocialProof = ({ component, theme, clickable }) => {
  const defaultData = useDefaultSocialProof();
  const data = component || defaultData;

  const {
    backgroundColor,
    headingKicker,
    heading,
    subhead,
    primaryCallToAction,
    secondaryCallToAction,
  } = data;

  const renderHeader =
    headingKicker ||
    heading ||
    subhead ||
    primaryCallToAction ||
    secondaryCallToAction;

  return (
    <Section background={backgroundColor || 'Light'}>
      <Wrapper clickable={clickable}>
        {renderHeader && (
          <Header>
            <Text theme={theme}>
              {headingKicker && (
                <p className="heading-kicker">{headingKicker}</p>
              )}
              {heading && <h2 className="heading">{heading}</h2>}
              {subhead && (
                <div
                  dangerouslySetInnerHTML={{ __html: subhead }}
                  className="subhead"
                />
              )}
            </Text>
            {primaryCallToAction || secondaryCallToAction ? (
              <Buttons data={data}>
                {primaryCallToAction && (
                  <CallToAction
                    variant="Red"
                    size="xxl"
                    url={primaryCallToAction?.url}
                    label={primaryCallToAction?.label}
                  />
                )}
                {secondaryCallToAction && (
                  <CallToAction
                    variant="Red-Outlined"
                    size="xxl"
                    url={secondaryCallToAction?.url}
                    label={secondaryCallToAction?.label}
                  />
                )}
              </Buttons>
            ) : null}
          </Header>
        )}
        <SocialProofImages data={data?.socialProof} clickable={clickable} />
      </Wrapper>
    </Section>
  );
};

export default SocialProof;
