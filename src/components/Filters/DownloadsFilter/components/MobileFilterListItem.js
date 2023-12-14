import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MobileFilterButton from './MobileFilterButton';
import Chevron from '../assets/chevron.svg';
import { ListItem } from '../styles/MobileFilterListItem.styled';

const MobileFilterListItem = ({
  index,
  text,
  options,
  activeFilter,
  setActiveFilter,
  activeDropdown,
  setActiveDropdown,
}) => (
  <ListItem>
    <button
      type="button"
      className={`dropdown-btn ${activeDropdown === index ? 'active' : ''}`}
      aria-label="open filter dropdown"
      onClick={() => {
        if (activeDropdown === index) setActiveDropdown(null);
        else setActiveDropdown(index);
      }}
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
          {options?.map(option => {
            const ignoredFields = ['Type', 'Topic'];
            if (ignoredFields.includes(option)) return null;
            return (
              <MobileFilterButton
                key={option}
                text={text}
                option={option}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  </ListItem>
);

export default MobileFilterListItem;
