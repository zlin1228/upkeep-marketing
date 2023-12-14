import React, { useState } from 'react';

import Icon from '../../../molecules/Icon';
import Controls from './Controls';
import Item from './Item';

import { Container, IconWrapper, Text, Wrapper } from '../styles/Card.styled';

const Card = ({ component }) => {
  const [activeItem, setActiveItem] = useState(0);
  const withItems = component?.items?.length > 0;

  const { hideText, heading, subhead, icon, iconColor, items } = component;
  const itemThemes = items.map(item => item.theme);

  return (
    <Container>
      <Wrapper withItems={withItems} hideText={hideText}>
        {!hideText && (
          <Text theme={iconColor} withItems={withItems}>
            {icon && (
              <IconWrapper theme={iconColor}>
                <Icon id={icon} width="24px" height="24px" />
              </IconWrapper>
            )}
            <p className="heading">{heading}</p>
            <p
              className="subhead"
              dangerouslySetInnerHTML={{ __html: subhead }}
            />
          </Text>
        )}
        {items?.map((item, idx) => (
          <Item key={item?.id} item={item} id={idx} activeItem={activeItem} />
        ))}
      </Wrapper>
      {items && (
        <Controls
          items={items}
          itemThemes={itemThemes}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      )}
    </Container>
  );
};

export default Card;
