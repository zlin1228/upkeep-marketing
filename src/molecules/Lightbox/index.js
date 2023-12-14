import React from 'react';
import { useLocation } from 'react-use';
import { AnimatePresence } from 'framer-motion';

import { useLightbox } from '../../context/lightboxContext';

import Icon from '../Icon';
import Blanket from '../Blanket';
import FormGenerator from '../../components/Forms';

import { color } from '../../atoms/colors';

import {
  Button,
  Close,
  Container,
  Content,
  Wrapper,
} from './styles/index.styled';

const Lightbox = ({ children }) => {
  const location = useLocation();
  const { activeLightbox, closeLightbox } = useLightbox();
  const { content } = activeLightbox || {};
  const { internal } = content || {};

  const component = {
    DatoCmsWebsiteForm: (
      <FormGenerator location={location} componentProps={content} />
    ),
  };

  return (
    <AnimatePresence>
      {activeLightbox && content && (
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Blanket />
          <Wrapper>
            <Content>
              {children}
              {component[internal?.type] || null}
            </Content>
            <Close>
              <Button type="button" onClick={closeLightbox}>
                <Icon
                  id="x-circle"
                  width="24px"
                  height="24px"
                  fillColor={color.darkBlue[300]}
                />
              </Button>
            </Close>
          </Wrapper>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
