import React from 'react';
import FooterMenu from './FooterMenu';
import FooterNewsletter from './FooterNewsletter';
import FooterBottom from './FooterBottom';
import UpKeepLogo from '../../../assets/logo-header-light.svg';
import {
  Container,
  Wrapper,
  Header,
  Logo,
  MenuHeader,
} from '../styles/Footer.styled';

const Footer = ({ desktopMenuData, tabletMenuData, mobileMenuData }) => (
  <Container>
    <Header>
      <Logo src={UpKeepLogo} alt="UpKeep logo" loading="lazy" />
      <FooterNewsletter />
    </Header>
    <Wrapper>
      <div>
        <MenuHeader>
          <Logo src={UpKeepLogo} alt="UpKeep logo" loading="lazy" />
          <FooterNewsletter />
        </MenuHeader>
        <FooterMenu
          menuData={desktopMenuData}
          index={0}
          breakpoint="desktop"
          orientation="left"
          layout="row"
        />
        <FooterMenu
          menuData={tabletMenuData}
          index={0}
          breakpoint="tablet"
          orientation="left"
        />
      </div>
      <div>
        <FooterMenu
          menuData={desktopMenuData}
          index={1}
          breakpoint="desktop"
          orientation="right"
        />
        <FooterMenu
          menuData={tabletMenuData}
          index={1}
          breakpoint="tablet"
          orientation="right"
        />
        <FooterMenu
          menuData={mobileMenuData}
          index={0}
          breakpoint="mobile"
          orientation="right"
        />
      </div>
    </Wrapper>
    <FooterBottom />
  </Container>
);

export default Footer;
