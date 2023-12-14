import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';

function Pagination(props) {
  const { totalPage, currenPage, goPage, link } = props;
  const [currenLayer, setCurrentLayer] = useState(0);
  const go2Page = pg => {
    setCurrentLayer(Math.floor(pg / 5) * 5);
    goPage(pg);
  };
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page = urlParams.get('p');
    if (page) {
      setCurrentLayer(Math.floor(page / 5) * 5);
      goPage(parseInt(page));
    }
  }, []);

  return (
    <PageContainer>
      <ul className="justify-content-center">
        {currenPage > 1 && (
          <li>
            <Link
              className="prev-next-btn"
              to={link + `p=${currenPage - 1}`}
              onClick={() => go2Page(currenPage - 1)}
            >
              Prev
            </Link>
          </li>
        )}
        {currenPage > 4 && (
          <li className={currenLayer === currenPage && 'active'}>
            <Link
              to={link + `p=${currenLayer}`}
              onClick={() => go2Page(currenLayer)}
            >
              {currenLayer}
            </Link>
          </li>
        )}
        {currenLayer + 1 <= totalPage && (
          <li className={currenLayer + 1 === currenPage && 'active'}>
            <Link
              to={link + `p=${currenLayer + 1}`}
              onClick={() => go2Page(currenLayer + 1)}
            >
              {currenLayer + 1}
            </Link>
          </li>
        )}
        {currenLayer + 2 <= totalPage && (
          <li className={currenLayer + 2 === currenPage && 'active'}>
            <Link
              to={link + `p=${currenLayer + 2}`}
              onClick={() => go2Page(currenLayer + 2)}
            >
              {currenLayer + 2}
            </Link>
          </li>
        )}
        {currenLayer + 3 <= totalPage && (
          <li className={currenLayer + 3 === currenPage && 'active'}>
            <Link
              to={link + `p=${currenLayer + 3}`}
              onClick={() => go2Page(currenLayer + 3)}
            >
              {currenLayer + 3}
            </Link>
          </li>
        )}
        {currenLayer + 4 <= totalPage && (
          <li className={currenLayer + 4 === currenPage && 'active'}>
            <Link
              to={link + `p=${currenLayer + 4}`}
              onClick={() => go2Page(currenLayer + 4)}
            >
              {currenLayer + 4}
            </Link>
          </li>
        )}
        {currenLayer + 5 <= totalPage && (
          <li>
            <Link
              to={link + `p=${currenLayer + 5}`}
              onClick={() => go2Page(currenLayer + 5)}
            >
              {'...'}
            </Link>
          </li>
        )}
        {currenPage < totalPage && (
          <li>
            <Link
              className="prev-next-btn"
              to={link + `p=${currenPage + 1}`}
              onClick={() => go2Page(currenPage + 1)}
            >
              Next
            </Link>
          </li>
        )}
      </ul>
    </PageContainer>
  );
}

export default Pagination;

const PageContainer = styled(Container)`
  margin-top: 48px;
  margin-bottom: 64px;
  ul {
    padding: 0;
    display: flex;
    li {
      display: block;
      text-align: center;
      margin-right: 10px;
      background: transparent;
      transition: background 0.3s;
      color: #707481;
      border-radius: 50%;
      a {
        display: block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;

        font-weight: 600;
        font-size: 15px;
        color: #707481;
        &.prev-next-btn {
          letter-spacing: -1px;
        }
      }
      &:hover {
        background: rgba(0, 123, 255, 0.05);
        a {
          color: #007bff;
        }
      }
      &.active {
        background: #007bff;
        a {
          color: #fff;
        }
      }
    }
  }
`;
