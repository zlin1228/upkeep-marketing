import React from 'react';

import GatsbyImage from '../../Image/GatsbyImage';

import {
  Arrows,
  Container,
  Header,
  Image,
  Spacer,
} from '../styles/ListItem.styled';

const arrowColorMap = {
  red: '#FF3429',
  blue: '#3F88F2',
  green: '#37C06C',
};

const ListItem = ({
  arrowColor,
  eyebrow,
  heading,
  subhead,
  image,
  showArrows,
  imageRef,
  spacerHeight,
}) => (
  <>
    <Container>
      <Header>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {heading && <p className="heading">{heading}</p>}
      </Header>
      <Image ref={imageRef || null}>
        {image?.image?.gatsbyImageData && (
          <GatsbyImage
            src={image?.image?.gatsbyImageData}
            alt="Temp Sensor Design"
          />
        )}
      </Image>
      {subhead && (
        <div>
          {subhead && (
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: subhead }}
            />
          )}
        </div>
      )}
    </Container>
    {showArrows && (
      <Spacer>
        <Arrows height={spacerHeight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="15"
            viewBox="0 0 26 15"
            fill="none"
          >
            <path
              d="M18.9052 0.966309L25.5514 7.61246L18.9052 14.2586V0.966309Z"
              fill={arrowColorMap[arrowColor] || '#000'}
            />
            <path
              d="M9.48914 0.966309L16.1353 7.61246L9.48914 14.2586V0.966309Z"
              fill={arrowColorMap[arrowColor] || '#000'}
              fillOpacity="0.3"
            />
            <path
              d="M0.0740967 0.966309L6.72024 7.61246L0.0740967 14.2586V0.966309Z"
              fill={arrowColorMap[arrowColor] || '#000'}
              fillOpacity="0.1"
            />
          </svg>
        </Arrows>
      </Spacer>
    )}
  </>
);

export default ListItem;
