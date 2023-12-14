import React from 'react';
import Icon from '../../molecules/Icon';
import {
  Section,
  Table,
  Wrapper,
  MobileWrapper,
  DesktopWrapper,
  Cta,
} from './styles/ProductTable';

const ProductTable = ({ component }) => {
  const { specifications, callToAction } = component;
  const middle = specifications.length / 2;
  const tableOne = specifications.slice(0, middle);
  const tableTwo = specifications.slice(middle, specifications.length);

  return (
    <Section>
      <Wrapper>
        <h2>Product Specifications</h2>
        <MobileWrapper>
          <Table>
            {specifications.map(spec => (
              <tr key={spec?.id}>
                <td className="product_title">{spec?.title}</td>
                <td>
                  <div
                    className="product_description"
                    dangerouslySetInnerHTML={{ __html: spec?.description }}
                  />
                </td>
              </tr>
            ))}
          </Table>
        </MobileWrapper>
        <DesktopWrapper>
          <Table>
            {tableOne &&
              tableOne.map(spec => (
                <tr key={spec?.id}>
                  <td className="product_title">{spec?.title}</td>
                  <td>
                    <div
                      className="product_description"
                      dangerouslySetInnerHTML={{ __html: spec?.description }}
                    />
                  </td>
                </tr>
              ))}
          </Table>
          <Table>
            {tableTwo &&
              tableTwo.map(spec => (
                <tr key={spec?.id}>
                  <td className="product_title">{spec?.title}</td>
                  <td>
                    <div
                      className="product_description"
                      dangerouslySetInnerHTML={{ __html: spec?.description }}
                    />
                  </td>
                </tr>
              ))}
          </Table>
        </DesktopWrapper>
        <Cta to={callToAction?.url}>
          {callToAction?.label}
          <Icon
            id="fa-solid fa-arrow-right-long"
            fillColor="#ffffff"
            width="12px"
            height="12px"
          />
        </Cta>
      </Wrapper>
    </Section>
  );
};

export default ProductTable;
