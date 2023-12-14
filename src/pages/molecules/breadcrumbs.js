import React from 'react';

import styled from 'styled-components';

import { font } from '../../atoms/typography';
import { color } from '../../atoms/colors';

import Breadcrumbs from '../../molecules/Breadcrumbs';

const exampleBreadcrumbs = [
  {
    pathname: '/',
    title: 'Home',
  },
  {
    pathname: '/resources',
    title: 'Resources',
  },
  {
    pathname: '/resources/podcasts',
    title: 'Podcasts',
  },
  {
    pathname:
      '/resources/podcasts/s5-e9-overall-equipment-effectiveness-oee-with-john-oskin',
    title: 'S5 E9 Overall Equipment Effectiveness Oee With John Oskin',
  },
  {
    pathname: '/about/this/thing/here',
    title: 'Here',
  },
  {
    pathname: '/about/this/thing/here/now',
    title: 'Now',
  },
];

const BreadcrumbsMolecule = () => {
  return (
    <>
      <Container>
        <Text>
          <h1 className="heading">Breadcrumbs</h1>
          <p className="subhead">
            Breadcrumbs allow users to select one or more items from a set,
            while radio buttons allow users to select just one option from a
            set. Both can also be used to turn an option on or off.
          </p>
        </Text>
        <Group>
          <Breadcrumbs theme="dark" breadcrumbs={exampleBreadcrumbs} />
        </Group>
        <DarkGroup>
          <Breadcrumbs theme="light" breadcrumbs={exampleBreadcrumbs} />
        </DarkGroup>
      </Container>
    </>
  );
};

export default BreadcrumbsMolecule;

const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 96px;
  padding: 96px 16px;
  margin: 0px auto;
`;

const Text = styled.div`
  width: 100%;
  max-width: 992px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .heading {
    ${font('display', 'xl', 700)}
  }

  .subhead {
    ${font('text', 'xl', 400)}
  }
`;

const Group = styled.div`
  width: 100%;
  max-width: 992px;
  display: flex;
  flex-direction: column;
  gap: 64px;

  padding: 32px;
  border: 1px solid ${color.darkBlue[50]};
`;

const DarkGroup = styled.div`
  width: 100%;
  max-width: 992px;
  display: flex;
  flex-direction: column;
  gap: 64px;

  background-color: ${color.darkBlue[1000]};

  padding: 32px;
  border: 1px solid ${color.darkBlue[50]};
`;

const Row = styled.div`
  display: flex;
  gap: 32px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
