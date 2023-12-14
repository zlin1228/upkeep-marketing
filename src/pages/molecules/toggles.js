import React, { useState } from 'react';
import styled from 'styled-components';
import { font } from '../../atoms/typography';
import { atMinWidth } from '../../atoms/breakpoints';

import Toggle from '../../molecules/Toggle';

const Toggles = () => {
  const [checked, setChecked] = useState(false);
  const heading = 'Remember me';
  const subheading = 'Save my login details for next time.';

  return (
    <>
      <Container>
        <Text>
          <h1 className="heading">Toggles</h1>
          <p className="subhead">
            Toggles (also known as “switches”) is a UI control that has two
            mutually-exclusive states, such as ON and OFF. The design and
            functionality of this component is based on a physical switch that
            allows users to turn things ON or OFF. Toggles are a great visual
            cue for settings, especially on mobile, because they take less
            screen estate (in comparison with two radio buttons).
          </p>
        </Text>
        <Flex flexDirection="row" gap="32px">
          <Flex flexDirection="column" gap="20px">
            <Toggle setChecked={setChecked} checked={checked} size="sm" />
            <Toggle
              setChecked={setChecked}
              checked={checked}
              className="hover"
              size="sm"
            />
            <Toggle
              setChecked={setChecked}
              checked={checked}
              className="focus"
              size="sm"
            />
            <Toggle
              setChecked={setChecked}
              checked={checked}
              disabled
              size="sm"
            />
          </Flex>
          <Flex flexDirection="column" gap="20px">
            <Toggle size="sm" checked />
            <Toggle className="hover" size="sm" checked />
            <Toggle className="focus" size="sm" checked />
            <Toggle disabled size="sm" checked />
          </Flex>
        </Flex>
        <Flex flexDirection="row" gap="32px">
          <Flex flexDirection="column" gap="20px">
            <Toggle
              setChecked={setChecked}
              checked={checked}
              size="sm"
              heading={heading}
              subheading={subheading}
            />
            <Toggle
              setChecked={setChecked}
              checked={checked}
              className="hover"
              size="sm"
              heading={heading}
              subheading={subheading}
            />
            <Toggle
              setChecked={setChecked}
              checked={checked}
              className="focus"
              size="sm"
              heading={heading}
              subheading={subheading}
            />
            <Toggle
              setChecked={setChecked}
              checked={checked}
              disabled
              size="sm"
              heading={heading}
              subheading={subheading}
            />
          </Flex>
          <Flex flexDirection="column" gap="20px">
            <Toggle
              size="sm"
              heading={heading}
              subheading={subheading}
              checked
            />
            <Toggle
              className="hover"
              size="sm"
              heading={heading}
              subheading={subheading}
              checked
            />
            <Toggle
              className="focus"
              size="sm"
              heading={heading}
              subheading={subheading}
              checked
            />
            <Toggle
              disabled
              size="sm"
              heading={heading}
              subheading={subheading}
              checked
            />
          </Flex>
        </Flex>

        <Flex flexDirection="row" gap="32px">
          <Flex flexDirection="column" gap="20px">
            <Toggle setChecked={setChecked} checked={checked} size="lg" />
            <Toggle
              setChecked={setChecked}
              checked={checked}
              className="hover"
              size="lg"
            />
            <Toggle
              setChecked={setChecked}
              checked={checked}
              className="focus"
              size="lg"
            />
            <Toggle
              setChecked={setChecked}
              checked={checked}
              disabled
              size="lg"
            />
          </Flex>
          <Flex flexDirection="column" gap="20px">
            <Toggle className="hover" size="lg" checked />
            <Toggle className="focus" size="lg" checked />
            <Toggle disabled size="lg" checked />
            <Toggle size="lg" checked />
          </Flex>
        </Flex>
        <Flex flexDirection="row" gap="32px">
          <Flex flexDirection="column" gap="20px">
            <Toggle
              setChecked={setChecked}
              checked={checked}
              size="lg"
              heading={heading}
              subheading={subheading}
            />
            <Toggle
              setChecked={setChecked}
              checked={checked}
              className="hover"
              size="lg"
              heading={heading}
              subheading={subheading}
            />
            <Toggle
              setChecked={setChecked}
              checked={checked}
              className="focus"
              size="lg"
              heading={heading}
              subheading={subheading}
            />
            <Toggle
              setChecked={setChecked}
              checked={checked}
              disabled
              size="lg"
              heading={heading}
              subheading={subheading}
            />
          </Flex>
          <Flex flexDirection="column" gap="20px">
            <Toggle
              size="lg"
              heading={heading}
              subheading={subheading}
              checked
            />
            <Toggle
              className="hover"
              size="lg"
              heading={heading}
              subheading={subheading}
              checked
            />
            <Toggle
              className="focus"
              size="lg"
              heading={heading}
              subheading={subheading}
              checked
            />
            <Toggle
              disabled
              size="lg"
              heading={heading}
              subheading={subheading}
              checked
            />
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Toggles;

const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 96px 16px;
  margin: 0px auto;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  ${atMinWidth.sm`
    flex-direction: ${({ flexDirection }) => flexDirection};
  `};
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
