import React, { useState } from 'react';

import styled from 'styled-components';

import { font } from '../../atoms/typography';
import { color } from '../../atoms/colors';

import Checkbox from '../../molecules/Checkbox';

const CheckboxesGroup = ({ type = 'checkbox', checked, setChecked }) => (
  <Group>
    <Row>
      <CheckboxesColumn
        size="sm"
        type={type}
        checked={checked}
        setChecked={setChecked}
      />
      <CheckboxesColumn size="sm" type={type} checked />
      <CheckboxesColumn size="sm" type={type} checked icon="minus" />
    </Row>
    <Row>
      <CheckboxesColumn
        size="sm"
        type={type}
        checked={false}
        heading="Remember me"
        subhead="Save my login details for next time."
      />
      <CheckboxesColumn
        size="sm"
        type={type}
        checked
        heading="Remember me"
        subhead="Save my login details for next time."
      />
    </Row>
    <Row>
      <CheckboxesColumn
        size="md"
        type={type}
        checked={checked}
        setChecked={setChecked}
      />
      <CheckboxesColumn size="md" type={type} checked />
      <CheckboxesColumn size="md" type={type} checked icon="minus" />
    </Row>
    <Row>
      <CheckboxesColumn
        size="md"
        type={type}
        checked={false}
        heading="Remember me"
        subhead="Save my login details for next time."
      />
      <CheckboxesColumn
        size="md"
        type={type}
        checked
        heading="Remember me"
        subhead="Save my login details for next time."
      />
    </Row>
  </Group>
);

const CheckboxesColumn = ({
  size = 'sm',
  type = 'checkbox',
  icon = 'check',
  heading,
  subhead,
  checked,
  setChecked,
}) => (
  <Column>
    <Checkbox
      size={size}
      type={type}
      icon={icon}
      heading={heading}
      subhead={subhead}
      checked={checked}
      setChecked={setChecked}
    />
    <Checkbox
      size={size}
      type={type}
      icon={icon}
      heading={heading}
      subhead={subhead}
      checked={checked}
      setChecked={setChecked}
      className="hover"
    />
    <Checkbox
      size={size}
      type={type}
      icon={icon}
      heading={heading}
      subhead={subhead}
      checked={checked}
      setChecked={setChecked}
      className="focus"
    />
    <Checkbox
      size={size}
      type={type}
      icon={icon}
      heading={heading}
      subhead={subhead}
      checked={checked}
      disabled
    />
  </Column>
);

const Checkboxes = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Container>
        <Text>
          <h1 className="heading">Checkboxes</h1>
          <p className="subhead">
            Checkboxes allow users to select one or more items from a set, while
            radio buttons allow users to select just one option from a set. Both
            can also be used to turn an option on or off.
          </p>
        </Text>
        <CheckboxesGroup
          type="checkbox"
          checked={checked}
          setChecked={setChecked}
        />
        <CheckboxesGroup
          type="radio"
          checked={checked}
          setChecked={setChecked}
        />
      </Container>
    </>
  );
};

export default Checkboxes;

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
  width: 100%;
  max-width: 992px;
  display: flex;
  flex-direction: column;
  gap: 64px;

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
