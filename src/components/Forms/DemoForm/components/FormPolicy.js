import React from 'react';
import { Link } from 'gatsby';
import { color } from '../../../../atoms/colors';
import Icon from '../../../../molecules/Icon';
import {
  Container,
  Checkbox,
  Text,
  ErrorMessage,
} from '../styles/FormPolicy.styled';

const FormPolicy = ({
  value,
  data,
  setData,
  validation,
  setValidation,
  errorMessage,
}) => (
  <>
    <Container>
      <Checkbox
        type="button"
        className={value ? 'checked' : ''}
        onClick={() => {
          setData({ ...data, policy: !data.policy });
          setValidation({ ...validation, policy: '' });
        }}
      >
        <Icon
          id="fa-solid fa-check"
          fillColor={color.common.white}
          width="12px"
          height="12px"
        />
      </Checkbox>
      <Text>
        By submitting this form you agree to the UpKeep{' '}
        <Link to="/privacy">Privacy Policy</Link> surrounding marketing
        communications.
      </Text>
    </Container>
    {errorMessage && (
      <ErrorMessage dangerouslySetInnerHTML={{ __html: errorMessage }} />
    )}
  </>
);

export default FormPolicy;
