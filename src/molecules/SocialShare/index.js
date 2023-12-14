import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import openSocialLink from './utils/openSocialLink';
import socialData from './data';
import { color } from '../../atoms/colors';
import {
  Container,
  Heading,
  List,
  ListItem,
  Button,
} from './styles/index.styled';

const SocialShare = ({ heading, orientation = 'horizontal' }) => {
  const [path, setPath] = useState(null);

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <Container className="social-share">
      {orientation === 'horizontal' && (
        <>{heading && <Heading>{heading}</Heading>}</>
      )}
      <List orientation={orientation}>
        {socialData(path).map(({ name, icon, url, ariaLabel }) => (
          <ListItem key={name}>
            <Button
              type="button"
              aria-label={ariaLabel}
              onClick={() => openSocialLink(url)}
            >
              <Icon id={icon} fillColor={color.darkBlue[1000]} />
            </Button>
          </ListItem>
        ))}
      </List>
      {orientation === 'vertical' && (
        <>{heading && <Heading orientation={orientation}>{heading}</Heading>}</>
      )}
    </Container>
  );
};

export default SocialShare;
