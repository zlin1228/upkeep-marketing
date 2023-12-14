import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Footer from './components/Footer';
import {
  sortDesktopMenuData,
  sortTabletMenuData,
  sortMobileMenuData,
} from './utils/sortMenuData';
import useStaticFooter from './utils/useStaticFooter';
import SimpleFooter from './components/SimpleFooter';

const FooterComponent = ({ component }) => {
  const { t } = useTranslation();

  const isSimpleFooter = component?.id === 'DatoCmsFooterComponent-141166188';
  const staticData = useStaticFooter();
  const menuData = component?.menu?.menuItem || staticData;

  if (isSimpleFooter) return <SimpleFooter />;

  const desktopMenuData = sortDesktopMenuData(menuData, t);
  const tabletMenuData = sortTabletMenuData(menuData, t);
  const mobileMenuData = sortMobileMenuData(menuData, t);

  return (
    <Footer
      desktopMenuData={desktopMenuData}
      tabletMenuData={tabletMenuData}
      mobileMenuData={mobileMenuData}
    />
  );
};

export default FooterComponent;
