import React, { useState, useEffect } from 'react';
import FooterAccordion from './FooterAccordion';
import FooterGroup from './FooterGroup';
import {
  setDataByIndex,
  setLeftColumnData,
  setRightColumnData,
} from '../utils/helpers';
import { Container, Column, Row } from '../styles/FooterMenu.styled';

const FooterMenu = ({ menuData, index, orientation, breakpoint, layout }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(setDataByIndex(index, menuData));
  }, [data, index, menuData]);

  if (breakpoint === 'mobile') {
    return <FooterAccordion data={menuData} />;
  }

  if (layout === 'row') {
    return (
      <Container index={index} className={breakpoint || ''} layout={layout}>
        <Row>
          <FooterGroup
            data={setLeftColumnData(data, orientation, breakpoint, layout)}
          />
        </Row>
      </Container>
    );
  }
  return (
    <Container index={index} className={breakpoint || ''}>
      <Column>
        <FooterGroup data={setLeftColumnData(data, orientation, breakpoint)} />
      </Column>
      <Column>
        <FooterGroup data={setRightColumnData(data, orientation, breakpoint)} />
      </Column>
    </Container>
  );
};

export default FooterMenu;
