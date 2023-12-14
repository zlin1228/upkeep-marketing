import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { color } from '../../../../atoms/colors';
import Icon from '../../../../molecules/Icon';
import CallToAction from '../../../CallToAction';
import handleDropdown from '../utils/handleDropdown';
import {
  ListItem,
  Heading,
  IconContainer,
  Text,
  Subhead,
} from '../styles/SwitcherItem.styled';

const SwitcherItem = ({
  heading,
  subhead,
  icon,
  iconColor,
  callToAction,
  index,
  activeDropdownIndex,
  setActiveDropdownIndex,
  isActive,
  theme,
}) => (
  <ListItem theme={theme} layout>
    {heading && (
      <Heading
        theme={theme}
        aria-label={heading}
        onClick={() =>
          handleDropdown({
            index,
            activeDropdownIndex,
            setActiveDropdownIndex,
          })
        }
      >
        {icon && (
          <IconContainer backgroundColor={iconColor}>
            <Icon
              id={icon}
              width="28px"
              height="28px"
              fillColor={color.common.white}
            />
          </IconContainer>
        )}
        {heading}
      </Heading>
    )}
    <AnimatePresence>
      {isActive(index) && (
        <Text
          layout
          initial={{ opacity: 0, maxHeight: 0 }}
          animate={{ opacity: 1, maxHeight: 500 }}
          exit={{ opacity: 0, maxHeight: 0 }}
          transition={{ duration: 0.5 }}
        >
          {subhead && (
            <Subhead
              theme={theme}
              dangerouslySetInnerHTML={{ __html: subhead }}
            />
          )}
          {callToAction && (
            <CallToAction
              url={callToAction?.url}
              label={callToAction?.label}
              variant={theme === 'Light' ? 'Outline - Dark' : 'Outline - White'}
              size="md"
            />
          )}
        </Text>
      )}
    </AnimatePresence>
  </ListItem>
);

export default SwitcherItem;
