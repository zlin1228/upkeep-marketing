import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Icon from '../../../molecules/Icon';
import CallToAction from '../../CallToAction';

import { color } from '../../../atoms/colors';
import {
  Container,
  Text,
  Wrapper,
  ArrowWrapper,
} from '../styles/MenuItem.styled';

const MenuItem = ({
  theme,
  url,
  label,
  description,
  fontAwesomeIcon,
  iconColor,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Container
      theme={theme}
      fontAwesomeIcon={fontAwesomeIcon}
      iconColor={iconColor}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CallToAction classes="menu-item" url={url}>
        {fontAwesomeIcon && (
          <Wrapper iconColor={iconColor} hovered={hovered}>
            <Icon
              id={fontAwesomeIcon}
              className="decorative-icon"
              width="100%"
              height="100%"
              fillColor={color.darkBlue[1000]}
              strokeColor={color.darkBlue[1000]}
            />
          </Wrapper>
        )}
        <Text fontAwesomeIcon={fontAwesomeIcon} hovered={hovered}>
          <div className="heading-wrapper">
            {label && <p className="heading">{label}</p>}
            {!fontAwesomeIcon && hovered && (
              <AnimatePresence>
                <ArrowWrapper
                  hovered={hovered}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <Icon
                    className="arrow-icon"
                    id="fa-solid fa-arrow-right"
                    width="100%"
                    height="100%"
                    fillColor={color.steel[500]}
                    strokeColor={color.steel[500]}
                  />
                </ArrowWrapper>
              </AnimatePresence>
            )}
          </div>
          {description && <p className="subhead">{description}</p>}
        </Text>
      </CallToAction>
    </Container>
  );
};

export default MenuItem;
