import React from 'react';

import { color } from '../../atoms/colors';

import Icon from '../../molecules/Icon';

import FooterComponent from '../../components/Footer';
import HeaderComponent from '../../components/Header';
import HeroContactUs from '../../components/Hero/HeroContactUs';
import Layout from '../../components/layout';
import SEO from '../../components/SEO/SEO';

import contactData from '../../data/ContactUs';

import {
  Section,
  Wrapper,
  Header,
  Circle,
  Card,
} from '../../styles/Pages/ContactUs.styled';

const ContactUs = () => (
  <Layout theme="light">
    <HeaderComponent theme="Transparent - Dark" />
    <HeroContactUs />
    <Section>
      <Wrapper>
        {contactData.map(item => (
          <Card key={item.title}>
            <Header>
              <Circle>
                <Icon
                  id={item.icon}
                  width="20px"
                  height="20px"
                  fillColor={color.common.white}
                />
              </Circle>
              <p className="heading">{item.heading}</p>
            </Header>
            <div className="subhead">{item.subhead}</div>
          </Card>
        ))}
      </Wrapper>
    </Section>
    <FooterComponent />
  </Layout>
);

export default ContactUs;

export const Head = ({ location }) => (
  <SEO title="UpKeep - Contact Us" pathname={location?.pathname} />
);
