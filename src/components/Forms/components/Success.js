import React from 'react';
import { Link } from 'gatsby';
import SuccessStyles from '../styles/Success';

const Success = props => (
  <SuccessStyles>
    <div
      className="message"
      dangerouslySetInnerHTML={{ __html: props?.message }}
    />
    {props.callToAction && (
      <Link to={props.callToAction.url}>{props.callToAction.label}</Link>
    )}
  </SuccessStyles>
);

export default Success;
