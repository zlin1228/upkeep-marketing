import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import CallToAction from '../../CallToAction';
import {
  Section,
  Wrapper,
  Frame,
  Content,
  Row,
  Buttons,
} from '../styles/CardDeckConversionPanel.styled';

const CardDeckConversionPanel = () => {
  const data = useStaticQuery(query);
  const component = data?.allDatoCmsConversionPanelComponent?.edges[0]?.node;

  return (
    <Section>
      <Wrapper>
        <Frame>
          <Content>
            {component?.heading && (
              <h2 className="heading">{component?.heading}</h2>
            )}
            {component?.subhead && (
              <p className="subhead">{component?.subhead}</p>
            )}
            <Row>
              <Buttons>
                <CallToAction
                  url={component?.callToAction?.url}
                  label={component?.callToAction?.label}
                  variant="Red"
                  size="xxl"
                />
                <CallToAction
                  url={component?.secondaryButton?.url}
                  label={component?.secondaryButton?.label}
                  variant="Red-Outlined"
                  size="xxl"
                />
              </Buttons>
              {component?.fallbackText && (
                <p className="disclaimer">{component?.fallbackText}</p>
              )}
            </Row>
          </Content>
        </Frame>
      </Wrapper>
    </Section>
  );
};

export default CardDeckConversionPanel;

const query = graphql`
  {
    allDatoCmsConversionPanelComponent(
      filter: { id: { eq: "DatoCmsConversionPanelComponent-121199178" } }
    ) {
      edges {
        node {
          id
          heading
          subhead
          fallbackText
          callToAction {
            ... on DatoCmsCallToAction {
              id
              label
              url
            }
          }
          secondaryButton {
            id
            label
            url
          }
        }
      }
    }
  }
`;
