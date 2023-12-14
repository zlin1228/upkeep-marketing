import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Alert from '../Alert/Alert';
import { TextButton } from './styles/ContentSquareLink.styled';

const ContentSquareLink = () => {
  const [active, setActive] = useState(false);

  const handleOptOut = () => {
    if (typeof window !== 'undefined') {
      window._uxa.push(['optout']);
      setActive(true);
    }
  };

  return (
    <>
      <TextButton onClick={() => handleOptOut()}>
        Opt-out of Content Square Tracking
      </TextButton>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Alert setActive={setActive} active={active} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContentSquareLink;
