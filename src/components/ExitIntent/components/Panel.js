import { Link } from 'gatsby';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ExitIntentForm from '../../Forms/ExitIntentForm';
import Success from './Success';
import {
  Frame,
  Wrapper,
  Heading,
  Subhead,
  FormWrapper,
  PrivacyPolicy,
  CloseBtn,
} from '../styles/Panel';

const Panel = ({
  component,
  closePopup,
  success,
  setSuccess,
  active,
  type,
}) => {
  return (
    <Frame className={active || ''}>
      <CloseBtn type="button" onClick={() => closePopup()}>
        <AiOutlineClose color="white" size="28px" />
      </CloseBtn>
      {success ? (
        <Success type={type} />
      ) : (
        <Wrapper>
          <Heading dangerouslySetInnerHTML={{ __html: component?.heading }} />
          <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
          <FormWrapper>
            <ExitIntentForm
              formHandler={component?.formHandler}
              download={component?.downloadableAsset?.url}
              success={success}
              setSuccess={setSuccess}
            />
            <PrivacyPolicy>
              By submitting this form you agree to the UpKeep{' '}
              <Link to="/privacy">privacy policy</Link> surrounding marketing
              communications.
            </PrivacyPolicy>
          </FormWrapper>
        </Wrapper>
      )}
    </Frame>
  );
};

export default Panel;
