import React from 'react';
import { AnimatePresence } from 'framer-motion';

import Icon from '../../../molecules/Icon';
import CallToAction from '../../CallToAction';

import Menu from './Menu';

import { List, ListItem, Nav } from '../styles/Navigation.styled';

const Navigation = ({ theme, navItems, activeMenu, handleDropdownClick }) => (
  <Nav>
    <List>
      {navItems.map((item, index) => {
        if (item?.navItemType === 'link') {
          return (
            <ListItem key={item?.id} theme={theme}>
              <CallToAction classes="nav-link nav-link-cta" url={item?.url}>
                {item?.name}
              </CallToAction>
            </ListItem>
          );
        }

        return (
          <ListItem
            key={item?.id}
            theme={theme}
            aria-haspopup="true"
            onClick={() => handleDropdownClick(index)}
            onMouseEnter={() =>
              activeMenu !== index && handleDropdownClick(index)
            }
            onMouseLeave={() => handleDropdownClick(index)}
          >
            <button
              type="button"
              className="nav-link"
              aria-haspopup="true"
              aria-expanded={activeMenu?.index === index}
              onClick={() => handleDropdownClick(index)}
            >
              {item?.name}
              <Icon
                id="chevron-down"
                className="chevron-down-icon"
                width="20px"
                height="20px"
                fillColor={theme}
              />
            </button>
            <AnimatePresence mode="wait">
              {activeMenu === index && (
                <Menu
                  id={index}
                  menu={item?.menu}
                  menuActive={activeMenu === index}
                />
              )}
            </AnimatePresence>
          </ListItem>
        );
      })}
    </List>
  </Nav>
);

export default Navigation;
