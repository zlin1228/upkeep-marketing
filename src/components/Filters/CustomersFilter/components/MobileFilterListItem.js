import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MobileFilterButton from './MobileFilterButton';
import Chevron from '../assets/chevron.svg';
import { ListItem } from '../styles/MobileFilterListItem.styled';

const MobileFilterListItem = ({
  text,
  index,
  options,
  activeDropdown,
  setActiveDropdown,
  filters,
  setFilters,
}) => {
  const handleDropdown = (activeDropdown, index) => {
    if (activeDropdown === index) setActiveDropdown(null);
    else setActiveDropdown(index);
  };

  return (
    <ListItem>
      <button
        type="button"
        className={`dropdown-btn ${activeDropdown === index ? 'active' : ''}`}
        aria-label="open filter dropdown"
        onClick={() => handleDropdown(activeDropdown, index)}
      >
        <span>{text}</span>
        <img src={Chevron} alt="chevron icon" />
      </button>
      <AnimatePresence>
        {activeDropdown === index && (
          <motion.div
            className="dropdown"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {options?.map((option, index) => (
              <MobileFilterButton
                key={index}
                type={text}
                option={option}
                filters={filters}
                setFilters={setFilters}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </ListItem>
  );
};

export default MobileFilterListItem;
