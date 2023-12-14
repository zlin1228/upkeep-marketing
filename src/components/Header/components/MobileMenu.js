import React from 'react';

import MenuItem from './MenuItem';

import {
  Container,
  List,
  ListItem,
  Menu,
  Wrapper,
} from '../styles/MobileMenu.styled';

const MobileMenu = ({ menu }) => (
  <Menu>
    {menu?.menuItem?.map(item => (
      <Container key={item?.id}>
        <Wrapper>
          <p className="menu-heading">{item?.name}</p>
          <List>
            {item?.navLink?.map(link => (
              <ListItem key={link?.id}>
                <MenuItem {...link} />
              </ListItem>
            ))}
          </List>
        </Wrapper>
      </Container>
    ))}
  </Menu>
);

export default MobileMenu;
