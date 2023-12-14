import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { captureException } from '@sentry/gatsby';
import { Form, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import PhoneInput from './components/PhoneInput';
import hotjarIdentifyAPI from '../../utils/hotjarIdentify';
import { scrollHandler } from './Utilities/scrollUtilities';
import { checkFormValidation } from './Utilities/demoFormValidation';
import { handleInputChange, handleSelect } from './Utilities/demoFormUtilities';
import PardotFormApi from './Utilities/pardotFormApi';
import {
  FormHolder,
  FormButton,
} from '../../styles/Components/Modal/ModalForm';
import {
  FormRow,
  PrivacyPolicy,
} from '../../styles/Components/Form/TrialSignupForm';

const DemoForm = props => {
  const demoUrl = typeof window !== `undefined` ? window.location.href : null;
  const sticky = useRef();
  const [userCountry, setUserCountry] = useState(null);
  const [phone, setPhone] = useState('');
  const [demo, setDemo] = useState({
    email: '',
    firstname: '',
    lastname: '',
    companyname: '',
    jobtitle: '',
    teamsize: '',
    phone: '',
  });

  useEffect(() => {
    const userEmail = Cookies.get('uk_email');
    setDemo({ ...demo, email: userEmail });
    const country = Cookies.get('upkeep_user_country');
    const savedData =
      Cookies.get('uk_user_data') || localStorage.getItem('uk_user_data');
    if (savedData) {
      setDemo(JSON.parse(savedData));
    } else if (country && country !== '') {
      setUserCountry(country.toLowerCase());
    } else {
      setUserCountry('us');
    }
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', () =>
        scrollHandler('demoform', sticky)
      );
      return () => {
        window.removeEventListener('scroll', () =>
          scrollHandler('demoform', sticky)
        );
      };
    }
    return 0;
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    try {
      if (checkFormValidation(demo)) {
        demo.url = demoUrl;
        PardotFormApi.signUp(demo).then(() => {
          hotjarIdentifyAPI(demo);
        });
      }
    } catch (error) {
      captureException(`Demo Form Error - ${error}`);
      alert('Something went wrong.');
      console.error(error);
    }
  };

  const handleChange = e => {
    setDemo({ ...demo, [e.target.name]: e.target.value });
    handleInputChange(e);
  };

  return (
    <div className="h-100">
      <FormHolder className="hero-form">
        <h3 className="form-title" id="demoform">
          Get a Free Product Tour
        </h3>
        <Form id="pardot-form">
          <FormRow className="justify-content-center">
            <TextInput
              name="email"
              value={demo.email}
              handler={handleChange}
              required
              label="Business Email"
              feedback="Please enter a valid email address"
            />
          </FormRow>
          <FormRow>
            <TextInput
              name="firstname"
              value={demo.firstname}
              handler={handleChange}
              required
              label="First Name"
              feedback="Field cannot be empty"
            />
            <TextInput
              name="lastname"
              value={demo.lastname}
              handler={handleChange}
              required
              label="Last Name"
              feedback="Field cannot be empty"
            />
          </FormRow>
          <PhoneInput
            label="Phone Number"
            feedback="Please enter a valid phone number"
            phone={phone}
            setPhone={setPhone}
            demo={demo}
            setDemo={setDemo}
            userCountry={userCountry}
          />
          <TextInput
            name="companyname"
            value={demo.companyname}
            handler={handleChange}
            required
            label="Company Name"
            feedback="Please enter a valid Company Name"
          />
          <TextInput
            name="jobtitle"
            value={demo.jobtitle}
            handler={handleChange}
            required
            label="Job Title"
            feedback="Please enter a valid Job Title"
          />
          <SelectInput
            value={demo.teamsize}
            handler={handleSelect}
            setter={setDemo}
            formData={demo}
            placeholder="Select team size"
            options={[
              { value: '', label: 'Select team size' },
              { value: '0-4', label: '0-4' },
              { value: '5-15', label: '5-15' },
              { value: '16-25', label: '16-25' },
              { value: '25+', label: '25+' },
            ]}
            feedback="Please select an option"
            label="Team Size"
            name="teamsize"
          />
          <FormButton>
            <Button
              variant="primary"
              type="button"
              onClick={e => handleSubmit(e)}
            >
              {props?.componentData?.callToAction || 'Schedule a Demo'}
            </Button>
          </FormButton>
          <Form.Row className="justify-content-center d-flex justify-content-center align-items-center">
            <PrivacyPolicy className="mb-0">
              By submitting this form you agree to the UpKeep{' '}
              <Link to="/privacy">privacy policy</Link> surrounding marketing
              communications.
            </PrivacyPolicy>
          </Form.Row>
        </Form>
      </FormHolder>
    </div>
  );
};

export default DemoForm;
