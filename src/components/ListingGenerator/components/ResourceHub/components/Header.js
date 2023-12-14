import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { headerData } from '../data';
import useResourceHubData from '../utils';
import useIsSticky from '../../../../../hooks/useIsSticky';
import { Container, Nav, List } from '../styles/Header.styled';

const Header = () => {
  const headerRef = useRef(null);
  const isSticky = useIsSticky(headerRef);

  const contentCount = {
    events: useResourceHubData('events').totalCount,
    learning: useResourceHubData('learning').totalCount,
    blog: useResourceHubData('blog').totalCount,
    podcasts: useResourceHubData('podcasts').totalCount,
    downloads: useResourceHubData('downloads').totalCount,
    tools: useResourceHubData('tools').totalCount,
    templates: useResourceHubData('templates').totalCount,
  };

  return (
    <Container ref={headerRef} data-scrolled={isSticky.toString()}>
      <Nav>
        <List>
          {headerData.map(item => (
            <li key={item?.url}>
              <Link
                to={item?.url}
                spy
                smooth
                duration={600}
                exact="true"
                offset={-170}
                activeClass="active"
              >
                {item?.title}{' '}
                <span className="count">({contentCount[item?.url]})</span>
              </Link>
            </li>
          ))}
        </List>
      </Nav>
    </Container>
  );
};

export default Header;
