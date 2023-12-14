import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Container } from 'react-bootstrap';
import PageBanner from '../../Banner/PageBanner';
import QRCodeGenerator from '../../Calculator/QRCodeGenerator';
import leftbg from '../../../assets/background/left_code_bg.svg';
import rightbg from '../../../assets/background/right_code_bg.svg';
import HeroSimple from '../../Hero/HeroSimple';

const CodeGenerator = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroSimple
        component={{
          theme: 'Blue',
          heading: t('QR Code Generator'),
          subhead: t(
            'Generate one or many QR codes as easy as pasting a list of all your serial numbers.'
          ),
        }}
      />
      <QRCodeGenerator className="qr-wrapper" />
    </>
  );
};

export default CodeGenerator;
