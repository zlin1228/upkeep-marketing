import React from 'react';
import HeadingComponent from '../HeadingComponent/HeadingComponent';
import checkmark from './assets/checkmark.svg';
import { Section, CardsRow, CardFrame } from './styles/BenefitsTable.styled';

const BenefitsTable = ({ component }) => (
  <Section>
    <HeadingComponent
      theme="light"
      headingKicker={component?.headingKicker}
      heading={component?.heading}
      subhead={component?.subhead}
    />
    <CardsRow className="savings-row justify-content-center">
      {component?.benefitCards.map(card => (
        <CardFrame
          xs={12}
          lg={5}
          className="card-frame"
          key={card?.heading}
          border={card?.themeColor}
        >
          {card?.heading && <div className="card-heading">{card?.heading}</div>}
          {card?.subhead && <div className="card-subhead">{card?.subhead}</div>}
          <hr />
          <div>
            <ul className="features-list">
              {card.benefitItem.map(item => (
                <li className="feature-item" key={item?.heading}>
                  <div className="icon-wrapper">
                    <img src={checkmark} alt="checkmark" />
                  </div>
                  <div>
                    <strong className="feature-title">{item?.heading}</strong>
                    {item?.subhead && (
                      <p className="feature-description">{item?.subhead}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardFrame>
      ))}
      {component?.disclaimer && (
        <div
          className="savings-disclaimer"
          dangerouslySetInnerHTML={{ __html: component?.disclaimer }}
        />
      )}
    </CardsRow>
  </Section>
);

export default BenefitsTable;
