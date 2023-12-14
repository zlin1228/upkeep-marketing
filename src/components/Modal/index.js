import React from 'react';
import Exit from './components/Exit';
import { Container, Backdrop, Wrapper } from './styles/index.styled';

const Modal = ({ children, showModal, setShowModal }) => (
  <Container className={showModal ? 'modal-active' : ''}>
    <Backdrop
      aria-label="Close Modal"
      type="button"
      onClick={() => setShowModal(!showModal)}
    />
    <Wrapper>
      <Exit showModal={showModal} setShowModal={setShowModal} />
      {children}
    </Wrapper>
  </Container>
);

export default Modal;
