import React from 'react';

import StackSwitcher from './StackSwitcher';
import CardSwitcher from './CardSwitcher';
import IconSwitcher from './IconSwitcher';
import SwitcherSlidebox from './SwitcherSlidebox';
import SwitchbackSwitcher from './SwitchbackSwitcher';
import HorizontalSwitcher from './HorizontalSwitcher';
import TabSwitcher from './TabSwitcher';
import StickySwitcher from './StickySwitcher';

const Switcher = ({ component }) => {
  switch (component?.variant) {
    case 'stack':
      return <StackSwitcher component={component} />;
    case 'card':
      return <CardSwitcher component={component} />;
    case 'icon':
      return <IconSwitcher component={component} />;
    case 'icon-switcher-dark':
      return <SwitcherSlidebox component={component} />;
    case 'Switcher-Slidebox':
      return <SwitcherSlidebox component={component} />;
    case 'switchback':
      return <SwitchbackSwitcher component={component} />;
    case 'horizontal':
      return <HorizontalSwitcher component={component} />;
    case 'tab-switcher':
      return <TabSwitcher component={component} />;
    case 'sticky-switcher':
      return <StickySwitcher component={component} />;
    default:
      return null;
  }
};

export default Switcher;
