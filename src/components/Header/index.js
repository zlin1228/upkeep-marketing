import React, { useState } from 'react';
import { useWindowSize } from 'react-use';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import useModal from '../../hooks/useModal';
import useStaticHeader from './utils/useStaticHeader';
import useEventListeners from './utils/useEventListeners';
import { useAnnouncementBar } from '../../context/announcementBarContext';

import Icon from '../../molecules/Icon';
import AnnouncementBar from '../AnnouncementBar/AnnouncementBar';
import SiteSearch from '../SiteSearch';
import LanguageSwitcher from '../LanguageSwitcher';
import CallToAction from '../CallToAction';

import MobileToggle from './components/MobileToggle';
import Navigation from './components/Navigation';
import MobileNavigation from './components/MobileNavigation';
import HeaderNoNav from './components/HeaderNoNav';
import UpKeepLogo from './components/UpKeepLogo';

import { breakpointNumbers } from '../../atoms/breakpoints';

import headerTheme from './utils/headerTheme';
import {
  Buttons,
  Container,
  Header,
  Logo,
  PrimaryContent,
  SearchToggle,
  SecondaryContent,
  Wrapper,
} from './styles/index.styled';

const HeaderComponent = ({
  theme,
  component,
  announcementBar,
  showAnnouncementBar,
  setShowAnnouncementBar,
}) => {
  const { t } = useTranslation();
  const { openModal } = useModal();
  const { width } = useWindowSize();
  const staticData = useStaticHeader();
  const { announcementBarHeight } = useAnnouncementBar();

  const [activeMenu, setActiveMenu] = useState(null);

  const initialTheme = theme || 'Fill - Light';

  const noNavigation = component?.navItems?.length === 0;
  const headerData = component || staticData;
  const navItems = headerData?.navItems;
  const { xl, lg } = breakpointNumbers;

  const {
    activeTheme,
    mobileNavActive,
    setMobileNavActive,
    scrolled,
  } = useEventListeners(initialTheme, activeMenu);

  const handleDropdownClick = index => {
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index);
    }
  };

  if (noNavigation) {
    return <HeaderNoNav theme={initialTheme} />;
  }
  return (
    <>
      {announcementBar && (
        <AnnouncementBar
          component={announcementBar}
          showAnnouncementBar={showAnnouncementBar}
          setShowAnnouncementBar={setShowAnnouncementBar}
        />
      )}
      <SiteSearch />
      <Header announcementBarHeight={announcementBarHeight}>
        <Container
          theme={activeTheme}
          activeMenu={activeMenu}
          mobileNavActive={mobileNavActive}
          scrolled={scrolled}
          className="exit"
        >
          <Wrapper>
            <PrimaryContent>
              <Logo to="/">
                <UpKeepLogo theme={headerTheme[activeTheme].logo} />
              </Logo>
              {width >= xl && (
                <Navigation
                  theme={headerTheme[activeTheme].text}
                  navItems={navItems}
                  activeMenu={activeMenu}
                  handleDropdownClick={handleDropdownClick}
                />
              )}
            </PrimaryContent>
            <SecondaryContent>
              <SearchToggle onClick={() => openModal()}>
                <Icon
                  id="search-lg"
                  width="inherit"
                  height="inherit"
                  strokeColor={headerTheme[activeTheme].icon}
                />
              </SearchToggle>
              {width < xl && (
                <LanguageSwitcher theme={headerTheme[activeTheme].icon} />
              )}
              {width >= lg && (
                <Buttons>
                  <CallToAction
                    label={t('Log in')}
                    url="https://app.onupkeep.com/#/login"
                    variant={headerTheme[activeTheme].link}
                  />
                  <CallToAction
                    label={t('Start a Free Trial')}
                    url="/free-trial-signup?referring_element=navbar"
                    variant="Filled - Steel"
                    size="md"
                  />
                </Buttons>
              )}
              {width >= xl && (
                <LanguageSwitcher theme={headerTheme[activeTheme].icon} />
              )}
              {width < xl && (
                <MobileToggle
                  theme={headerTheme[activeTheme].icon}
                  mobileNavActive={mobileNavActive}
                  setMobileNavActive={setMobileNavActive}
                />
              )}
            </SecondaryContent>
          </Wrapper>
        </Container>
        {width < xl && (
          <MobileNavigation
            navItems={navItems}
            mobileNavActive={mobileNavActive}
            activeMenu={activeMenu}
            handleDropdownClick={handleDropdownClick}
          />
        )}
      </Header>
    </>
  );
};

export default HeaderComponent;
