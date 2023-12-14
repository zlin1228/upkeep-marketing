import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Icon from '../../../molecules/Icon';
import CallToAction from '../../CallToAction';
import {
  Toggle,
  IconWrapper,
  Details,
} from '../styles/IconSwitcherControl.styled';
import { color } from '../../../atoms/colors';

const IconSwitcherControl = ({ slide, index, activeSlide, setActiveSlide }) => {
  const isOpen = index === activeSlide;
  return (
    <>
      <Toggle
        initial={false}
        animate="open"
        exit="collapsed"
        variants={{
          open: { marginTop: '32px' },
          collapsed: { marginTop: 0 },
        }}
        onClick={() => setActiveSlide(isOpen ? false : index)}
        className={isOpen ? 'active' : ''}
      >
        <IconWrapper className="icon">
          <Icon
            id={slide?.icon}
            width="20px"
            height="20px"
            fillColor={color.common.white}
          />
        </IconWrapper>
        <h4>{slide?.heading}</h4>
      </Toggle>
      <AnimatePresence initial={false}>
        {activeSlide === index && (
          <Details
            key={`details-${index}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '16px' },
              collapsed: { opacity: 0, height: 0, marginTop: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: slide?.subhead }}
            />
            {slide?.callToAction && (
              <CallToAction
                url={slide?.callToAction?.url}
                label={slide?.callToAction?.label}
                variant="Red-Arrow-Link"
                icon="fa-solid fa-chevron-right"
              />
            )}
          </Details>
        )}
      </AnimatePresence>
    </>
  );
};

export default IconSwitcherControl;
