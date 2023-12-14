import React from 'react';

import styled from 'styled-components';

import { font } from '../../atoms/typography';
import { atMinWidth } from '../../atoms/breakpoints';

import Tooltip from '../../molecules/Tooltip';
import Icon from '../../molecules/Icon';

const Tooltips = () => (
  <>
    <Container>
      <Text>
        <h1 className="heading">Tootips</h1>
        <p className="subhead">
          Tooltips are used to describe or identify an element. In most
          scenarios, tooltips help the user understand the meaning or function
          of an icon, or display the alt text of an image.
        </p>
      </Text>
      {/* Dark  */}
      <Column>
        <Cell margin="32px">
          <Tooltip
            className="hover"
            theme="dark"
            position="top"
            noUnderline
            heading="heading"
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="32px">
          <Tooltip
            className="hover"
            theme="dark"
            position="top"
            noUnderline
            heading="heading"
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="32px">
          <Tooltip
            className="hover"
            theme="dark"
            position="top-right"
            noUnderline
            heading="heading"
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="32px">
          <Tooltip
            className="hover"
            theme="dark"
            position="top-left"
            noUnderline
            heading="heading"
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="32px">
          <Tooltip
            className="hover"
            theme="dark"
            position="right"
            noUnderline
            heading="heading"
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="32px">
          <Tooltip
            className="hover"
            theme="dark"
            position="bottom"
            noUnderline
            heading="heading"
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="dark"
            position="left"
            noUnderline
            heading="heading"
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
      </Column>
      <Column>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="dark"
            position="top"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="dark"
            position="top"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="dark"
            position="top-right"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="dark"
            position="top-left"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="dark"
            position="right"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="dark"
            position="bottom"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="128px">
          <Tooltip
            className="hover"
            theme="dark"
            position="left"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
      </Column>
      {/* Light */}
      <Column>
        <Cell margin="32px">
          <Tooltip
            className="hover"
            theme="light"
            position="top"
            noUnderline
            heading="heading"
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="32px">
          <Tooltip
            className="hover"
            theme="light"
            position="top"
            noUnderline
            heading="heading"
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="32px">
          <Tooltip
            className="hover"
            theme="light"
            position="top-right"
            noUnderline
            heading="heading"
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="32px">
          <Tooltip
            className="hover"
            theme="light"
            position="top-left"
            noUnderline
            heading="heading"
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="32px">
          <Tooltip
            className="hover"
            theme="light"
            position="right"
            noUnderline
            heading="heading"
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="32px">
          <Tooltip
            className="hover"
            theme="light"
            position="bottom"
            noUnderline
            heading="heading"
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="light"
            position="left"
            noUnderline
            heading="heading"
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
      </Column>
      <Column>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="light"
            position="top"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="light"
            position="top"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="light"
            position="top-right"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="light"
            position="top-left"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="light"
            position="right"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="64px">
          <Tooltip
            className="hover"
            theme="light"
            position="bottom"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
        <Cell margin="128px">
          <Tooltip
            className="hover"
            theme="light"
            position="left"
            noUnderline
            heading="heading"
            subheading="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
            arrow
          >
            <Icon
              id="fa-regular fa-circle-question"
              width="16px"
              height="16px"
              fillColor="#415E78"
            />
          </Tooltip>
        </Cell>
      </Column>
    </Container>
  </>
);

export default Tooltips;

const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 16px;
  margin: 0px auto;
  gap: 32px;
`;

const Text = styled.div`
  width: 100%;
  max-width: 992px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  .heading {
    ${font('display', 'xl', 700)}
  }

  .subhead {
    ${font('text', 'xl', 400)}
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cell = styled.div`
  margin-top: ${({ margin }) => `calc(${margin} * 2)` || '0px'};
  margin-bottom: ${({ margin }) => `calc(${margin} * 2)` || '0px'};
  ${atMinWidth.lg`
      margin-top: ${({ margin }) => margin || '0px'};
      margin-bottom: ${({ margin }) => margin || '0px'};
  `}
`;
