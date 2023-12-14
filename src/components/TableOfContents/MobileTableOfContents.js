import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'react-scroll';
import Icon from '../../molecules/Icon';
import {
  Container,
  Button,
  List,
  ListItem,
} from './styles/MobileTableOfContents.styled';

const MobileTableOfContents = ({ component }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  if (component?.length === 0) return null;
  return (
    <Container className="mobile-toc">
      <Button
        className={expanded ? 'active' : ''}
        onClick={() => setExpanded(!expanded)}
      >
        {t('Table of Contents')}
        <Icon id="fa-solid fa-chevron-up" width="20px" height="20px" />
      </Button>
      <List className={expanded ? 'active' : ''}>
        {component?.map(item => (
          <ListItem>
            <Link
              spy
              to={item?.anchor}
              smooth
              activeClass="active"
              duration={600}
              offset={-150}
            >
              {item?.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MobileTableOfContents;
