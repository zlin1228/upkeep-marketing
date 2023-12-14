import React, { useState, useEffect } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby';
import FormControl from './components/FormControl';
import CallToAction from '../../CallToAction';
import {
  handleSubmit,
  validateOnChange,
  handlePhoneOnChange,
} from './utils/helpers';
import formatUrlValue from '../Utilities/formatUrlValue';
import truncateUrl from '../Utilities/truncateUrl';
import {
  Container,
  Wrapper,
  TwoColumn,
  Header,
  Form,
  Button,
  Footer,
  FooterLink,
  TopBar,
} from './styles/index.styled';

const DatahubForm = ({ component, location }) => {
  const { t } = useTranslation();
  const [data, setData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    companyname: '',
    url: truncateUrl(location.href),
    companysize: '',
    jobtitle: '',
    industry: '',
    industrydetail: '',
    country: '',
    countrycode: '',
    state: '',
  });
  const [validation, setValidation] = useState({
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    companyname: '',
  });

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

  return (
    <Container>
      <TopBar />
      <Wrapper>
        <Header>
          {component?.heading && (
            <p className="heading">{component?.heading}</p>
          )}
          {component?.subhead && (
            <p className="subhead">{component?.subhead}</p>
          )}
        </Header>
        <Form
          id="demo-form"
          data-zi-mapped-form
          onSubmit={e =>
            handleSubmit(
              e,
              data,
              setData,
              validation,
              setValidation,
              component?.pardotFormHandler
            )
          }
        >
          <FormControl
            id="email"
            type="email"
            name="email"
            label={t('Business Email Address')}
            placeholder={t('Enter your email')}
            required
            autoComplete="email"
            errorMessage={validation.email}
            value={data.email}
            handleChange={handleChange}
          />
          <TwoColumn>
            <FormControl
              id="firstname"
              type="text"
              name="firstname"
              label={t('First Name')}
              placeholder={t('Enter your first name')}
              autoComplete="given-name"
              required
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
              autoComplete="family-name"
              required
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
            placeholder={t('Enter your phone number')}
            autoComplete="off"
            required
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
            autoComplete="organization"
            required
            errorMessage={validation.companyname}
            value={data.companyname}
            handleChange={handleChange}
          />
          <FormControl
            id="companysize"
            type="number"
            name="companysize"
            label="Number of employees*"
            placeholder="Enter your number of employees"
            autoComplete="on"
            value={data.companysize}
            handleChange={handleChange}
            hidden
          />
          <FormControl
            id="jobtitle"
            type="text"
            name="jobtitle"
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
            placeholder="State"
            autoComplete="state"
            value={data.state}
            handleChange={handleChange}
            hidden
          />
          <Button type="submit">{component?.callToAction || 'Submit'}</Button>
        </Form>
        <Footer>
          <FooterLink>
            <p>{t('Not Ready Yet?')}</p>
            <CallToAction
              variant="Link - Red"
              url="https://www.upkeep.com/free-trial-signup"
              label={t('Sign up for free')}
              size="sm"
            />
          </FooterLink>
          <div className="use-policy">
            <p>{t('No Credit Card Required.')}</p>
            <p>
              {t('By clicking above, you agree to the')}{' '}
              <Link to="/terms">{t('UpKeep Terms of Use')}.</Link>
            </p>
          </div>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default DatahubForm;
