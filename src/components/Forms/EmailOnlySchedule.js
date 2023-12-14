import React, { useState, useRef } from 'react';
import { navigate } from 'gatsby';
import { captureException } from '@sentry/gatsby';
import { isValidEmail } from './Utilities/demoFormValidation';
import PardotFormApi from './Utilities/pardotFormApi';
import ScheduleDemoInput from './ScheduleDemoInput';

const EmailOnlySchedule = props => {
  const [email, setEmail] = useState('');
  const emailRef = useRef();
  const errorRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    const validEmail = isValidEmail(email);
    try {
      if (!email || !validEmail) {
        emailRef.current.classList.add('is-invalid');
        errorRef.current.classList.add('is-invalid');
        return false;
      }
      event.preventDefault();
      PardotFormApi.emailOnlySchedule(email).then(() => {
        navigate('/demo');
      });
    } catch (err) {
      captureException(`Demo Email Only Form Error - ${err}`);
      alert('Something went wrong.');
      console.error(err);
    }
  };

  const handleChange = e => {
    setEmail(e.target.value);
    emailRef.current.classList.remove('is-invalid');
    errorRef.current.classList.remove('is-invalid');
  };

  return (
    <div className={`${props.className} w-100`}>
      {props.mode === 'schedule' && (
        <ScheduleDemoInput
          id="cpform"
          label={props.label ? props.label : 'Schedule a demo'}
          email={email}
          emailRef={emailRef}
          errorRef={errorRef}
          handleChange={e => handleChange(e)}
          handleSubmit={e => handleSubmit(e)}
        />
      )}
      {props.mode === 'download' && (
        <ScheduleDemoInput
          label={props.label ? props.label : 'Download Now'}
          email={email}
          emailRef={emailRef}
          errorRef={errorRef}
          handleChange={e => handleChange(e)}
          handleSubmit={e => handleSubmit(e)}
        />
      )}
      {props.mode === 'updates' && (
        <ScheduleDemoInput
          label={props.label ? props.label : 'Get updates'}
          email={email}
          emailRef={emailRef}
          errorRef={errorRef}
          handleChange={e => handleChange(e)}
          handleSubmit={e => handleSubmit(e)}
        />
      )}
      {props.mode === 'subscribe' && (
        <ScheduleDemoInput
          align={props?.align}
          label={props.label ? props.label : 'Subscribe'}
          email={email}
          emailRef={emailRef}
          errorRef={errorRef}
          handleChange={e => handleChange(e)}
          handleSubmit={e => handleSubmit(e)}
        />
      )}
    </div>
  );
};

export default EmailOnlySchedule;
