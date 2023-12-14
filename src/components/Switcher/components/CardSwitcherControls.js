import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Container,
  Button,
  Heading,
  Subhead,
  Badge,
} from '../styles/CardSwitcherControls.styled';

const CardSwitcherControls = ({
  component,
  activeSlideIndex,
  setActiveSlideIndex,
}) => (
  <Container>
    {component?.map((item, index) => (
      <Button
        key={item?.id}
        type="button"
        onClick={() => setActiveSlideIndex(index)}
        className={`${activeSlideIndex === index && 'active'}`}
      >
        <Heading>
          {item?.heading}
          {item?.tag && <Badge>{item?.tag}</Badge>}
        </Heading>
        <Subhead>{item?.subhead}</Subhead>
      </Button>
    ))}
  </Container>
);

export default CardSwitcherControls;
