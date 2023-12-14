import React, { useState } from 'react';
import { FiMail } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Form } from 'react-bootstrap';
import {
  Flex,
  IconHolder,
  InputEmail,
  SubmitButton
} from '../../styles/Components/Form/EmailOnlySchedule';
import {isValidEmail} from "./Utilities/demoFormValidation"
import PardotFormApi from "./Utilities/pardotFormApi"
import {navigate} from 'gatsby'

const BlogSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    const validEmail = isValidEmail(email)

    if(!email || !validEmail){
      document.querySelector("input[name='email']").classList.add('is-invalid');
      return false;
    } else {
      event.preventDefault();

      PardotFormApi.blogSubscription(email).then(()=>{
        navigate('/demo')
      })
    }
  };

  return (
    <div>
      <Form validated={false} onSubmit={handleSubmit} noValidate>
        <Flex>
          <IconContext.Provider value={{ color: '#007bff', className: "global-class-name" }}>
            <IconHolder>
              <FiMail />
            </IconHolder>
          </IconContext.Provider>
            <InputEmail type="email" name="email" placeholder="Your email" required onChange={(e) => setEmail(e.target.value)} />
            <SubmitButton type="submit">Subscribe</SubmitButton>
        </Flex>
      </Form>
           
    </div>
  );
};

export default BlogSubscription; 
