import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Form from './components/Form';
import Logo from './assets/logo.svg';
import { Container, Text } from './styles/index.styled';

const NewsletterCard = () => {
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);

  return (
    <Container className="newsletter-card">
      <Text>
        <img src={Logo} alt="Logo" className="logo" />
        <p className="heading">
          {success
            ? t('Thank you for subscribing!')
            : t('Get the best maintenance advice, straight to your inbox.')}
        </p>
      </Text>
      {!success && <Form success={success} setSuccess={setSuccess} />}
    </Container>
  );
};

export default NewsletterCard;
