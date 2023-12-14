import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { AnimatePresence } from 'framer-motion';

import { useAnnouncementBar } from '../../../context/announcementBarContext';

import Icon from '../../../molecules/Icon';
import CallToAction from '../../CallToAction';
import MobileMenu from './MobileMenu';

import { color } from '../../../atoms/colors';
import {
  Button,
  Buttons,
  Container,
  Dropdown,
  List,
  ListItem,
  Navigation,
  Wrapper,
} from '../styles/MobileNavigation.styled';

const MobileNavigation = ({
  mobileNavActive,
  navItems,
  activeMenu,
  handleDropdownClick,
}) => {
  const { t } = useTranslation();
  const { announcementBarHeight } = useAnnouncementBar();
  return (
    <AnimatePresence>
      {mobileNavActive && (
        <Container
          initial={{ maxHeight: 0, transition: { duration: 0.3, delay: 0.25 } }}
          animate={{
            maxHeight: announcementBarHeight
              ? `calc(100dvh + ${announcementBarHeight}px)`
              : `calc(100dvh - 68px)`,
            transition: { duration: 0.3, delay: 0.25 },
          }}
          exit={{ maxHeight: 0, transition: { duration: 0.1 } }}
          announcementBarHeight={announcementBarHeight}
        >
          <Navigation>
            <List>
              {navItems.map((item, index) => (
                <ListItem key={item?.id} className="parent-item">
                  {item?.navItemType === 'link' && (
                    <CallToAction url={item?.url}>
                      <Wrapper>{item?.name}</Wrapper>
                    </CallToAction>
                  )}
                  {item?.navItemType === 'menu' && (
                    <>
                      <Button
                        type="button"
                        aria-haspopup="true"
                        onClick={() => handleDropdownClick(index)}
                      >
                        <Wrapper>
                          {item?.name}
                          <Icon
                            id={`chevron-${
                              activeMenu === index ? 'up' : 'down'
                            }`}
                            width="20px"
                            height="20px"
                            fillColor={color.darkBlue[900]}
                          />
                        </Wrapper>
                      </Button>
                      <AnimatePresence>
                        {activeMenu === index && (
                          <Dropdown
                            aria-expanded={activeMenu?.index === index}
                            aria-hidden={activeMenu?.index !== index}
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            <MobileMenu menu={item?.menu} />
                          </Dropdown>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </ListItem>
              ))}
            </List>
          </Navigation>
          <Buttons>
            <CallToAction
              label={t('Start a Free Trial')}
              url="/free-trial-signup?referring_element=navbar"
              variant="Filled - Steel"
              size="lg"
            />
            <CallToAction
              label={t('Log in')}
              url="https://app.onupkeep.com/#/login"
              variant="Link - Dark"
            />
          </Buttons>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;
