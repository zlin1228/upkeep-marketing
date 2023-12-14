import React from 'react';
import { motion } from 'framer-motion';

import { useUrlParams } from '../../../../../hooks/useUrlParams';

import { Container, List, Button } from '../styles/Switcher.styled';

const ListItem = ({ text, isSelected, onClick }) => (
  <li>
    <Button
      type="button"
      className={isSelected ? 'active' : ''}
      aria-label={text}
      onClick={onClick}
    >
      {isSelected && (
        <motion.div
          className="overlay"
          layoutId="outline"
          initial={false}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }}
        />
      )}
      <motion.span className="text">{text}</motion.span>
    </Button>
  </li>
);

const PricingTabs = ({ pricingGroups, pricingGroup, setPricingGroup }) => {
  const { setParams } = useUrlParams();

  if (!pricingGroups || pricingGroups?.length <= 1) {
    return null;
  }

  return (
    <Container>
      <List className="tabs">
        {pricingGroups.map(item => (
          <ListItem
            key={item?.id}
            text={item?.name}
            isSelected={pricingGroup?.name === item?.name}
            onClick={() => {
              setParams({ filter: item?.name?.toLowerCase() });
              setPricingGroup(item);
            }}
          />
        ))}
      </List>
    </Container>
  );
};

export default PricingTabs;
