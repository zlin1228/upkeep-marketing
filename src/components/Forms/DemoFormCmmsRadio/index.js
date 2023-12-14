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
import usePreventNegativeInput from '../../../hooks/usePreventNegativeInput';
import {
  Container,
  Header,
  Form,
  TwoColumn,
  Button,
  Footer,
  FooterLink,
} from './styles/index.styled';

const DemoFormCmmsRadio = ({ component, location }) => {
  const { t } = useTranslation();
  usePreventNegativeInput('Number_of_Technicians__c');
  const [data, setData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    companyname: '',
    Number_of_Technicians__c: '',
    url: truncateUrl(location.href),
    jobtitle: '',
    industry: '',
    industrydetail: '',
    country: '',
    countrycode: '',
    state: '',
    DoNotRoute: true,
    LeadStatus: 'MQL',
  });
  const [validation, setValidation] = useState({
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    companyname: '',
    Number_of_Technicians__c: '',
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

  const requiredFields = [
    'email',
    'firstname',
    'lastname',
    'phone',
    'companyname',
    'Number_of_Technicians__c',
  ];

  const hasErrors = Object.values(validation).some(value => value !== '');
  const hasEmptyRequiredFields = requiredFields.some(field => !data[field]);
  const isDisabled = hasErrors || hasEmptyRequiredFields;

  return (
    <Container>
      <Header>{t('Get a Free Product Tour')}</Header>
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
          placeholder={t('Enter your business email address')}
          label={t('Business Email Address')}
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
            placeholder={t('Enter your first name')}
            label={t('First Name')}
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
            placeholder={t('Enter your last name')}
            label={t('Last Name')}
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
          placeholder={t('Enter your mobile number')}
          label={t('Mobile Number')}
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
          placeholder={t('Enter your company name')}
          label={t('Company Name')}
          autoComplete="organization"
          required
          errorMessage={validation.companyname}
          value={data.companyname}
          handleChange={handleChange}
        />
        <FormControl
          id="Number_of_Technicians__c"
          type="number"
          name="Number_of_Technicians__c"
          placeholder={t('Enter number of technicians')}
          label={t('Number of Technicians')}
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
          placeholder="Job Title"
          label="Job Title"
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
          label="Industry"
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
          label="Industry Details"
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
          label="Country"
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
          label="State"
          autoComplete="state"
          value={data.state}
          handleChange={handleChange}
          hidden
        />
        <input
          type="text"
          id="DoNotRoute"
          name="DoNotRoute"
          value={data.DoNotRoute}
        />
        <input
          type="text"
          id="LeadStatus"
          name="LeadStatus"
          value={data.LeadStatus}
        />
        <Button type="submit" className={`${isDisabled ? 'disabled' : ''}`}>
          {t('Request Free Product Tour')}
        </Button>
      </Form>
      <Footer>
        <FooterLink>
          <p>{t('Not Ready Yet?')}</p>
          <CallToAction
            variant="Link - Red"
            size="sm"
            url="https://www.upkeep.com/free-trial-signup"
            label={t('Sign up for free')}
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
    </Container>
  );
};

export default DemoFormCmmsRadio;
