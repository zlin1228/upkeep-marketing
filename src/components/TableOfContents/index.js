import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'react-scroll';
import Icon from '../../molecules/Icon';
import { color } from '../../atoms/colors';
import { Container, Header, List } from './styles/index.styled';

const TableOfContents = ({ component }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(true);
  if (component?.length === 0) return null;
  return (
    <Container className="toc">
      <Header>
        <button
          className={active ? 'active' : ''}
          type="button"
          aria-label="toggle toc"
          onClick={() => setActive(!active)}
        >
          {t('Table of Contents')}
          <Icon
            id={`fa-solid fa-chevron-${active ? 'up' : 'down'}`}
            width="20px"
            height="20px"
            fillColor={color.primary[700]}
          />
        </button>
      </Header>
      <List className={active ? 'active' : ''}>
        {component?.map(item => (
          <li key={item?.anchor}>
            <Link
              to={item?.anchor}
              spy
              smooth
              hashSpy
              offset={-125}
              duration={700}
              delay={100}
            >
              {item?.label}
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default TableOfContents;
