/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby';

import CallToAction from '../../CallToAction';
import Loader from '../../../molecules/Loader';
import FormControl from './components/FormControl';

import {
  handleSubmit,
  validateOnChange,
  handlePhoneOnChange,
} from './utils/helpers';
import truncateUrl from '../Utilities/truncateUrl';
import formatUrlValue from '../Utilities/formatUrlValue';

import usePreventNegativeInput from '../../../hooks/usePreventNegativeInput';

import {
  Container,
  Wrapper,
  Header,
  Form,
  Button,
  ErrorMessage,
  Footer,
  FooterLink,
  TopBar,
  TwoColumn,
} from './styles/index.styled';

const FreeTrialForm = ({ location, component }) => {
  const { t } = useTranslation();
  usePreventNegativeInput('Number_of_Technicians__c');

  const [data, setData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    companyname: '',
    Number_of_Technicians__c: 1,
    url: truncateUrl(location.href),
    jobtitle: '',
    industry: '',
    industrydetail: '',
    country: '',
    countrycode: '',
    state: '',
  });
  const [validation, setValidation] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    companyname: '',
    Number_of_Technicians__c: '',
  });
  const [networkError, setNetworkError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = formatUrlValue(location);
    setData({ ...data, url: truncateUrl(url) });
  }, []);

  const handleChange = e => {
    if (e.target.name === 'phone') {
      handlePhoneOnChange(e, validation, setValidation, data, setData);
      return;
    }
    setData({ ...data, [e.target.name]: e.target.value });
    validateOnChange(e, e.target.name, validation, setValidation);
  };

  if (loading) {
    return (
      <Container className="loading">
        <Loader text="Please wait while we create your account. This could take up to 10 seconds. Thank you for being patient." />
      </Container>
    );
  }

  return (
    <Container>
      <TopBar />
      <Wrapper>
        <Header>
          <p className="heading">
            {component?.heading || t('Start your 14-day free trial today!')}
          </p>
          {component?.subhead && (
            <p className="subhead">{component?.subhead}</p>
          )}
        </Header>
        <Form
          id="trial-form"
          data-zi-mapped-form
          onSubmit={e =>
            handleSubmit(
              e,
              data,
              setData,
              validation,
              setValidation,
              setNetworkError,
              setLoading,
              location.href
            )
          }
        >
          <FormControl
            id="email"
            type="email"
            name="email"
            label={t('Email')}
            required
            placeholder={t('Enter your business email address')}
            autoComplete="email"
            errorMessage={validation.email}
            value={data.email}
            handleChange={handleChange}
          />
          <FormControl
            id="password"
            type="password"
            name="password"
            label={t('Password')}
            placeholder={t('Create Password')}
            required
            autoComplete="new-password"
            errorMessage={validation.password}
            value={data.password}
            handleChange={handleChange}
          />
          <TwoColumn>
            <FormControl
              id="firstname"
              type="text"
              name="firstname"
              placeholder={t('Enter your first name')}
              label={t('First Name')}
              required
              autoComplete="given-name"
              errorMessage={validation.firstname}
              value={data.firstname}
              handleChange={handleChange}
            />
            <FormControl
              id="lastname"
              type="text"
              name="lastname"
              label={t('Last Name')}
              placeholder={t('Enter your last name')}
              required
              autoComplete="family-name"
              errorMessage={validation.lastname}
              value={data.lastname}
              handleChange={handleChange}
            />
          </TwoColumn>
          <FormControl
            id="phone"
            type="tel"
            name="phone"
            label={t('Mobile Number')}
            placeholder={t('Enter your mobile number')}
            required
            autoComplete="off"
            errorMessage={validation.phone}
            value={data.phone}
            handleChange={handleChange}
          />
          <FormControl
            id="companyname"
            type="text"
            name="companyname"
            label={t('Company Name')}
            placeholder={t('Enter your company name')}
            required
            autoComplete="organization"
            errorMessage={validation.companyname}
            value={data.companyname}
            handleChange={handleChange}
          />
          <FormControl
            id="Number_of_Technicians__c"
            type="number"
            name="Number_of_Technicians__c"
            label={t('Number of Technicians')}
            placeholder={t('Enter number of technicians')}
            autoComplete="on"
            required
            errorMessage={validation.Number_of_Technicians__c}
            value={data.Number_of_Technicians__c}
            handleChange={handleChange}
          />
          <FormControl
            id="jobtitle"
            type="text"
            name="jobtitle"
            label="Job Title"
            placeholder="Job Title"
            autoComplete="on"
            value={data.jobtitle}
            handleChange={handleChange}
            hidden
          />
          <FormControl
            id="industry"
            type="text"
            name="industry"
            label="Industry"
            placeholder="Industry"
            autoComplete="on"
            value={data.industry}
            handleChange={handleChange}
            hidden
          />
          <FormControl
            id="industrydetail"
            type="text"
            name="industrydetail"
            label="Industry Details"
            placeholder="Industry Details"
            autoComplete="on"
            value={data.industrydetail}
            handleChange={handleChange}
            hidden
          />
          <FormControl
            id="country"
            type="text"
            name="country"
            label="Country"
            placeholder="Country"
            autoComplete="country"
            value={data.country}
            handleChange={handleChange}
            hidden
          />
          <FormControl
            id="state"
            type="text"
            name="state"
            label="State"
            placeholder="State"
            autoComplete="state"
            value={data.state}
            handleChange={handleChange}
            hidden
          />
          {networkError && <ErrorMessage>{networkError}</ErrorMessage>}
          <Button type="submit">{t('Start a Free Trial')}</Button>
        </Form>
        <FooterLink>
          <p>{t('Not Ready Yet?')}</p>
          <CallToAction
            variant="Link - Steel"
            size="sm"
            url="https://www.upkeep.com/demo?referring_element=trial-form"
            label={t('Schedule a tour')}
          />
        </FooterLink>
        <Footer>
          <p>{t('No Credit Card Required.')}</p>
          <p>
            {t('By clicking above, you agree to the')}{' '}
            <Link to="/terms">{t('UpKeep Terms of Use')}.</Link>
          </p>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default FreeTrialForm;
