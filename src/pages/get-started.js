import React, { useState } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/SEO/SEO';
import HeaderNoNav from '../components/Header/components/HeaderNoNav';
import Modal from '../components/Modal';
import DemoForm from '../components/Forms/DemoForm';
import TrialForm from '../components/Forms/FreeTrialForm';
import {
  Section,
  Wrapper,
  Heading,
  Subhead,
  Buttons,
  Button,
  Footer,
} from '../styles/Pages/GetStarted';

const GetStarted = ({ location }) => {
  const [modalStateA, setModalStateA] = useState(false);
  const [modalStateB, setModalStateB] = useState(false);

  return (
    <Layout>
      <Modal showModal={modalStateA} setShowModal={setModalStateA}>
        <DemoForm location={location} />
      </Modal>
      <Modal showModal={modalStateB} setShowModal={setModalStateB}>
        <TrialForm location={location} />
      </Modal>
      <Section>
        <HeaderNoNav theme="Dark" />
        <Wrapper>
          <Heading>Get started with UpKeep</Heading>
          <Subhead>
            Maintenance shouldn’t mean guesswork and paperwork. UpKeep makes it
            simple to see where everything stands, all in one place. That means
            less guesswork and more time to focus on what matters.
          </Subhead>
          <Buttons>
            <Button
              variant="Primary"
              onClick={() => setModalStateA(!modalStateA)}
            >
              Request a Product Tour
            </Button>
            <Button
              variant="Primary-Light"
              onClick={() => setModalStateB(!modalStateB)}
            >
              Start for Free
            </Button>
          </Buttons>
        </Wrapper>
        <Footer>
          <p>© {new Date().getFullYear()} UpKeep Maintenance Management</p>
          <Link to="/privacy">Privacy Policy</Link>
        </Footer>
      </Section>
    </Layout>
  );
};

export default GetStarted;

export const Head = () => (
  <SEO
    title="Get Started | CMMS, EAM & IIoT Software by UpKeep Asset Operations Management | Try Free"
    indexable={false}
  />
);
