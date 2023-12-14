import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import Cookies from "js-cookie"
import { handleInputChange } from "../Forms/Utilities/demoFormUtilities"
import { webinarModalValidation } from '../Forms/Utilities/webinarAccessValidation'
import { ModalContainer, FormHolder, FormButton, Overlay } from '../../styles/Components/Modal/WebinarAccessModal'

const WebinarAccessModal = ({ showModal, setShowModal, setWebinarAccess }) => {
  const [access, setAccess] = useState({
		firstName: '',
		lastName: '',
		company: '',
		email: '',
		industry: '',
	});

  const handleSubmit = (e) => {
		e.preventDefault();
		if (webinarModalValidation(access)) {
      Cookies.set('upkeep_webinar_access', access);
      setWebinarAccess(true)
      setShowModal(false)
		} else {
			return false
		}
	}

  const handleChange = (e) => {
		setAccess({
			...access,
			[e.target.name]: e.target.value
		})
		handleInputChange(e)
	}
  
  return  (
    <ModalContainer style={typeof window !== 'undefined' && showModal ? {opacity: '1', pointerEvents: 'auto'} : {opacity: '0', pointerEvents: 'none'}}>
      <Overlay onClick={() => setShowModal(false)}></Overlay>
      <FormHolder className='hero-form'>
        <h3 className="form-title" id="demoform">Unlock Your All Access Pass</h3>
        <Form validated={false} noValidate id="pardot-form" className='w-100'>
        <iframe style={{overflow: "scroll"}} width="100%" height="360" frameborder="0" src="https://app.livestorm.co/p/726d57d9-cde0-484b-9277-2bdfd8e08bde/form" title="UpKeep Demo / Q&A [On Demand] | UpKeep"></iframe>
        </Form>
      </FormHolder>
    </ModalContainer>
  )
}

export default WebinarAccessModal