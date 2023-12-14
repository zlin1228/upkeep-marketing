import React from 'react';

import styled from 'styled-components';

import { font } from '../../atoms/typography';
import { color } from '../../atoms/colors';

import Badge from '../../molecules/Badge';
import BadgeGroup from '../../molecules/BadgeGroup';

const Badges = () => (
  <Container>
    <Text>
      <h1 className="heading">Badges</h1>
      <p className="subhead">
        Badges help highlight important information, such as notifications or
        new and unread messages. They’re primarily used for communicating
        secondary or additional information to text.
      </p>
    </Text>
    <Row>
      <Group>
        <Badge
          href="/"
          label="Label"
          size="sm"
          startIcon={null}
          endIcon={null}
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          iconColor={color.midnight[500]}
        />
        <Badge
          href="/"
          label="Label"
          size="md"
          startIcon={null}
          endIcon={null}
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          iconColor={color.midnight[500]}
        />
        <Badge
          href="/"
          label="Label"
          size="lg"
          startIcon={null}
          endIcon={null}
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          iconColor={color.midnight[500]}
        />
      </Group>
      <Group>
        <Badge
          href="/"
          label="Label"
          size="sm"
          startIcon="arrow-right"
          endIcon={null}
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          iconColor={color.midnight[500]}
        />
        <Badge
          href="/"
          label="Label"
          size="md"
          startIcon="arrow-right"
          endIcon={null}
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          iconColor={color.midnight[500]}
        />
        <Badge
          href="/"
          label="Label"
          size="lg"
          startIcon="arrow-right"
          endIcon={null}
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          iconColor={color.midnight[500]}
        />
      </Group>
      <Group>
        <Badge
          href="/"
          label="Label"
          size="sm"
          startIcon={null}
          endIcon="arrow-right"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          iconColor={color.midnight[500]}
        />
        <Badge
          href="/"
          label="Label"
          size="md"
          startIcon={null}
          endIcon="arrow-right"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          iconColor={color.midnight[500]}
        />
        <Badge
          href="/"
          label="Label"
          size="lg"
          startIcon={null}
          endIcon="arrow-right"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          iconColor={color.midnight[500]}
        />
      </Group>
      <Group>
        <Badge
          label={null}
          size="sm"
          startIcon={null}
          endIcon="arrow-right"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          iconColor={color.midnight[500]}
        />
        <Badge
          label={null}
          size="md"
          startIcon={null}
          endIcon="arrow-right"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          iconColor={color.midnight[500]}
        />
        <Badge
          label={null}
          size="lg"
          startIcon={null}
          endIcon="arrow-right"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          iconColor={color.midnight[500]}
        />
      </Group>
    </Row>
    <Row>
      <Column>
        <BadgeGroup
          href="/"
          size="md"
          position="leading"
          label="We’ve just released a new feature"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          endIcon="arrow-right"
        >
          <Badge
            label="New feature"
            size="sm"
            backgroundColor={color.common.white}
            textColor={color.midnight[500]}
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="md"
          position="leading"
          label="We’ve just released a new feature"
          backgroundColor={color.midnight[100]}
          textColor={color.midnight[800]}
          endIcon="arrow-right"
          iconColor={color.midnight[800]}
        >
          <Badge
            label="New feature"
            size="sm"
            backgroundColor={color.midnight[400]}
            textColor={color.common.white}
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="md"
          position="leading"
          label="We’ve just released a new feature"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          endIcon="arrow-right"
          iconColor={color.midnight[500]}
        >
          <Badge
            label="New feature"
            size="sm"
            backgroundColor={color.midnight[700]}
            textColor={color.common.white}
          />
        </BadgeGroup>
      </Column>
      <Column>
        <BadgeGroup
          href="/"
          size="lg"
          position="leading"
          label="We’ve just released a new feature"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          endIcon="arrow-right"
        >
          <Badge
            label="New feature"
            size="md"
            backgroundColor={color.common.white}
            textColor={color.midnight[500]}
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="lg"
          position="leading"
          label="We’ve just released a new feature"
          backgroundColor={color.midnight[100]}
          textColor={color.midnight[800]}
          endIcon="arrow-right"
          iconColor={color.midnight[800]}
        >
          <Badge
            label="New feature"
            size="md"
            backgroundColor={color.midnight[400]}
            textColor={color.common.white}
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="lg"
          position="leading"
          label="We’ve just released a new feature"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
          endIcon="arrow-right"
          iconColor={color.midnight[500]}
        >
          <Badge
            label="New feature"
            size="md"
            backgroundColor={color.midnight[700]}
            textColor={color.common.white}
          />
        </BadgeGroup>
      </Column>
      <Column>
        <BadgeGroup
          href="/"
          size="md"
          position="trailing"
          label="We’ve just released a new feature"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
        >
          <Badge
            label="New feature"
            size="sm"
            backgroundColor={color.common.white}
            textColor={color.midnight[500]}
            endIcon="arrow-right"
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="md"
          position="trailing"
          label="We’ve just released a new feature"
          backgroundColor={color.midnight[100]}
          textColor={color.midnight[800]}
        >
          <Badge
            label="New feature"
            size="sm"
            backgroundColor={color.midnight[400]}
            textColor={color.common.white}
            endIcon="arrow-right"
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="md"
          position="trailing"
          label="We’ve just released a new feature"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
        >
          <Badge
            label="New feature"
            size="sm"
            backgroundColor={color.midnight[700]}
            textColor={color.common.white}
            endIcon="arrow-right"
          />
        </BadgeGroup>
      </Column>
      <Column>
        <BadgeGroup
          href="/"
          size="lg"
          position="trailing"
          label="We’ve just released a new feature"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
        >
          <Badge
            label="New feature"
            size="md"
            backgroundColor={color.common.white}
            textColor={color.midnight[500]}
            endIcon="arrow-right"
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="lg"
          position="trailing"
          label="We’ve just released a new feature"
          backgroundColor={color.midnight[100]}
          textColor={color.midnight[800]}
        >
          <Badge
            label="New feature"
            size="md"
            backgroundColor={color.midnight[400]}
            textColor={color.common.white}
            endIcon="arrow-right"
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="lg"
          position="trailing"
          label="We’ve just released a new feature"
          backgroundColor={color.midnight[50]}
          textColor={color.midnight[500]}
        >
          <Badge
            label="New feature"
            size="md"
            backgroundColor={color.midnight[700]}
            textColor={color.common.white}
            endIcon="arrow-right"
          />
        </BadgeGroup>
      </Column>
    </Row>
    <Row>
      <Column>
        <BadgeGroup
          href="/"
          size="md"
          position="leading"
          label="We’ve just released a new feature"
          backgroundColor={color.darkBlue[50]}
          textColor={color.darkBlue[600]}
          endIcon="arrow-right"
        >
          <Badge
            label="New feature"
            size="sm"
            backgroundColor={color.common.white}
            textColor={color.darkBlue[600]}
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="md"
          position="leading"
          label="We’ve just released a new feature"
          backgroundColor={color.darkBlue[100]}
          textColor={color.darkBlue[600]}
          endIcon="arrow-right"
        >
          <Badge
            label="New feature"
            size="sm"
            backgroundColor={color.darkBlue[400]}
            textColor={color.common.white}
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="md"
          position="leading"
          label="We’ve just released a new feature"
          backgroundColor={color.darkBlue[50]}
          textColor={color.darkBlue[600]}
          endIcon="arrow-right"
        >
          <Badge
            label="New feature"
            size="sm"
            backgroundColor={color.darkBlue[600]}
            textColor={color.common.white}
          />
        </BadgeGroup>
      </Column>
      <Column>
        <BadgeGroup
          href="/"
          size="lg"
          position="leading"
          label="We’ve just released a new feature"
          backgroundColor={color.darkBlue[50]}
          textColor={color.darkBlue[600]}
          endIcon="arrow-right"
        >
          <Badge
            label="New feature"
            size="md"
            backgroundColor={color.common.white}
            textColor={color.darkBlue[600]}
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="lg"
          position="leading"
          label="We’ve just released a new feature"
          backgroundColor={color.darkBlue[100]}
          textColor={color.darkBlue[600]}
          endIcon="arrow-right"
        >
          <Badge
            label="New feature"
            size="md"
            backgroundColor={color.darkBlue[400]}
            textColor={color.common.white}
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="lg"
          position="leading"
          label="We’ve just released a new feature"
          backgroundColor={color.darkBlue[50]}
          textColor={color.darkBlue[600]}
          endIcon="arrow-right"
        >
          <Badge
            label="New feature"
            size="md"
            backgroundColor={color.darkBlue[600]}
            textColor={color.common.white}
          />
        </BadgeGroup>
      </Column>
      <Column>
        <BadgeGroup
          href="/"
          size="md"
          position="trailing"
          label="We’ve just released a new feature"
          backgroundColor={color.darkBlue[50]}
          textColor={color.darkBlue[600]}
        >
          <Badge
            label="New feature"
            size="sm"
            backgroundColor={color.common.white}
            textColor={color.darkBlue[600]}
            endIcon="arrow-right"
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="md"
          position="trailing"
          label="We’ve just released a new feature"
          backgroundColor={color.darkBlue[100]}
          textColor={color.darkBlue[600]}
        >
          <Badge
            label="New feature"
            size="sm"
            backgroundColor={color.darkBlue[400]}
            textColor={color.common.white}
            endIcon="arrow-right"
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="md"
          position="trailing"
          label="We’ve just released a new feature"
          backgroundColor={color.darkBlue[50]}
          textColor={color.darkBlue[600]}
        >
          <Badge
            label="New feature"
            size="sm"
            backgroundColor={color.darkBlue[600]}
            textColor={color.common.white}
            endIcon="arrow-right"
          />
        </BadgeGroup>
      </Column>
      <Column>
        <BadgeGroup
          href="/"
          size="lg"
          position="trailing"
          label="We’ve just released a new feature"
          backgroundColor={color.darkBlue[50]}
          textColor={color.darkBlue[600]}
        >
          <Badge
            label="New feature"
            size="md"
            backgroundColor={color.common.white}
            textColor={color.darkBlue[600]}
            endIcon="arrow-right"
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="lg"
          position="trailing"
          label="We’ve just released a new feature"
          backgroundColor={color.darkBlue[100]}
          textColor={color.darkBlue[600]}
        >
          <Badge
            label="New feature"
            size="md"
            backgroundColor={color.darkBlue[400]}
            textColor={color.common.white}
            endIcon="arrow-right"
          />
        </BadgeGroup>
        <BadgeGroup
          href="/"
          size="lg"
          position="trailing"
          label="We’ve just released a new feature"
          backgroundColor={color.darkBlue[50]}
          textColor={color.darkBlue[600]}
        >
          <Badge
            label="New feature"
            size="md"
            backgroundColor={color.darkBlue[600]}
            textColor={color.common.white}
            endIcon="arrow-right"
          />
        </BadgeGroup>
      </Column>
    </Row>
  </Container>
);

export default Badges;

const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 64px;
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
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 64px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
