import React from 'react';
import CallToAction from '../../CallToAction';
import GatsbyImage from '../../Image/GatsbyImage';
import Icon from '../../../molecules/Icon';
import { Slide } from '../styles/SwitchbackSwitcherSlide.styled';

const SwitchbackSwitcherSlide = ({ component }) => (
  <Slide>
    <div className="thumbnail">
      <GatsbyImage
        src={component?.image?.gatsbyImageData}
        alt={component?.image?.alt}
      />
    </div>
    {component?.fontAwesomeIcon && (
      <div className="icon">
        <Icon
          id={component?.fontAwesomeIcon}
          width="18px"
          height="18px"
          fillColor="#ffffff"
        />
      </div>
    )}
    <h2>{component?.heading}</h2>
    <p>{component?.subhead}</p>
    <CallToAction
      label={component?.callToAction?.label}
      url={component?.callToAction?.url}
      variant="Red-Arrow-Link"
      icon="fa-solid fa-chevron-right"
    />
  </Slide>
);

export default SwitchbackSwitcherSlide;
