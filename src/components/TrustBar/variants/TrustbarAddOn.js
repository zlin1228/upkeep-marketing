import React from 'react';
import shortid from 'shortid';
import Slider from 'react-slick';
import { Wrapper, Slide } from '../styles/TrustbarAddOn';
import { addOnSettings } from '../utils/addOnSettings';
import AddOnLogos from '../components/AddOnLogos';

const TrustbarAddOn = ({ component }) => (
  <Wrapper>
    <Slider {...addOnSettings}>
      {component?.company.map(item => (
        <Slide key={shortid.generate()}>
          <AddOnLogos
            key={component?.id}
            theme={component?.theme}
            logo={item}
          />
        </Slide>
      ))}
    </Slider>
  </Wrapper>
);

export default TrustbarAddOn;
