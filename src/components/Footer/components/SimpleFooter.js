import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import LogoLight from '../../../assets/logo/upkeep-logo-color-light.svg';
import {
  Footer,
  Wrapper,
  Content,
  Logo,
  TextLink,
  Links,
} from '../styles/SimpleFooter.styled';

const SimpleFooter = () => {
  const { t } = useTranslation();

  return (
    <Footer>
      <Wrapper>
        <Content>
          <Logo src={LogoLight} alt="Upkeep" />
          <p className="copyright">
            © {new Date().getFullYear()} UpKeep Maintenance Management
          </p>
        </Content>
        <Links>
          <TextLink to="/privacy">{t('Privacy Policy')}</TextLink>
          <TextLink to="/terms">{t('Terms & Conditions')}</TextLink>
        </Links>
      </Wrapper>
    </Footer>
  );
};

export default SimpleFooter;
