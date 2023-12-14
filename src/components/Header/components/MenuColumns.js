import React from 'react';

import MenuItem from './MenuItem';

import { Column, Group, List, ListItem } from '../styles/MenuColumns.styled';

const MenuColumns = ({ id, menu }) => {
  const renderMenuItems = (items, isSingleColumn) =>
    items.map(item => (
      <Group key={item.name}>
        <p className="menu-heading">{item.name}</p>
        <List id={id} isSingleItem={isSingleColumn && items.length <= 1}>
          {item.navLink.map(link => (
            <ListItem key={link.id}>
              <MenuItem theme="light" {...link} />
            </ListItem>
          ))}
        </List>
      </Group>
    ));

  return (
    <>
      {menu?.menuItem?.length === 3 ? (
        <>
          <Column isFirstColumn id={id}>
            {renderMenuItems(menu.menuItem.slice(0, 2), true)}
          </Column>
          <Column>{renderMenuItems([menu.menuItem[2]])}</Column>
        </>
      ) : (
        menu?.menuItem?.map((item, index) => (
          <Column key={item.name} isFirstColumn={index === 0} id={id}>
            {renderMenuItems([item], index === 0)}
          </Column>
        ))
      )}
    </>
  );
};

export default MenuColumns;
