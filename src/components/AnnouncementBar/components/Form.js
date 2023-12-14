import React from 'react';
import {
  Form,
  InputGroup,
  Input,
  Label,
  SubmitBtn,
} from '../styles/AnnouncementBar.styled';

const FormComponent = ({ component }) => (
  <Form>
    <InputGroup>
      <Label htmlFor="email">Email</Label>
      <Input type="email" placeholder="Enter your email" />
    </InputGroup>
    <SubmitBtn theme={component?.theme}>Subscribe</SubmitBtn>
  </Form>
);

export default FormComponent;
