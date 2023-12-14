import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Checked from './assets/checked.svg';
import Unchecked from './assets/unchecked.svg';
import { fetchCategories, handleClick } from './utils/helpers';
import {
  Container,
  Button,
  List,
  ListItem,
} from './styles/MobileFilter.styled';

const PartnershipsMobileFilter = ({
  data,
  activeCategories,
  setActiveCategories,
}) => {
  const categories = fetchCategories(data);
  const [expanded, setExpanded] = useState(false);
  return (
    <Container className="partnerships-filter-mobile">
      <Button
        type="button"
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        <span>Categories</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8678 1.93747L6.3187 7.44246C6.14247 7.61871 5.85753 7.61871 5.6813 7.44246L0.132172 1.93748C-0.0440573 1.76122 -0.0440574 1.47623 0.132172 1.29998L0.874548 0.557486C1.05078 0.381229 1.33572 0.381229 1.51195 0.557486L6 5.00123L10.4881 0.557485C10.6643 0.381228 10.9492 0.381228 11.1255 0.557485L11.8678 1.29998C12.0441 1.47623 12.0441 1.76122 11.8678 1.93747Z"
            fill="#8C98A9"
          />
        </svg>
      </Button>
      <AnimatePresence>
        {expanded && (
          <List
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            expanded={expanded}
          >
            {categories.map(category => {
              const isActive = activeCategories.includes(category);
              return (
                <ListItem
                  type="button"
                  key={category}
                  onClick={() =>
                    handleClick(category, activeCategories, setActiveCategories)
                  }
                >
                  <img src={isActive ? Checked : Unchecked} alt="filter icon" />
                  <span>{category}</span>
                </ListItem>
              );
            })}
          </List>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default PartnershipsMobileFilter;
