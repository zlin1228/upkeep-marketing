import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Icon from '../../../molecules/Icon';
import CallToAction from '../../CallToAction';

import { color } from '../../../atoms/colors';
import {
  Container,
  Button,
  List,
  ListItem,
} from '../styles/FooterAccordionItem.styled';

const FooterAccordionItem = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  if (!data) return null;
  const { label, childMenuItem } = data;

  return (
    <Container className="footer-accordion-item">
      <Button onClick={() => setExpanded(!expanded)} data-expanded={expanded}>
        {label}
        <Icon
          id="fa-regular fa-plus"
          width="20px"
          height="20px"
          fillColor={color.common.white}
          strokeColor={color.common.white}
        />
      </Button>
      <AnimatePresence>
        {expanded && (
          <List
            layout
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto' },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {childMenuItem.map(item => (
              <ListItem key={item.id}>
                <CallToAction
                  classes="accordion-link"
                  url={item?.callToAction?.url}
                  label={item?.label || item?.callToAction?.label}
                />
              </ListItem>
            ))}
          </List>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default FooterAccordionItem;
