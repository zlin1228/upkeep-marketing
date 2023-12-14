import React from 'react';
import { useAnnouncementBar } from '../../../context/announcementBarContext';

import MenuColumns from './MenuColumns';

import { Container, Dropdown, Wrapper } from '../styles/Menu.styled';

const Menu = ({ id, menu, menuActive }) => {
  const { announcementBarHeight } = useAnnouncementBar();

  return (
    <Dropdown
      menuActive={menuActive}
      initial={{
        opacity: 0,
        y: -15,
        transition: { duration: 0.25, delay: 0.2 },
      }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.25, delay: 0.2 } }}
      exit={{ opacity: 0, y: -15, transition: { duration: 0.1 } }}
      aria-hidden={!menuActive}
      announcementBarHeight={announcementBarHeight}
    >
      <Container>
        <Wrapper id={id}>
          <MenuColumns menu={menu} id={id} />
        </Wrapper>
      </Container>
    </Dropdown>
  );
};

export default Menu;
