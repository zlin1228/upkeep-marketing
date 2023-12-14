import React from 'react';

import styled from 'styled-components';

import CallToAction from '../../components/CallToAction';
import { font } from '../../atoms/typography';

const setOne = [
  'Filled - Red', // disabled state needs updating
  'Outline - Dark', // replaced by 'Outline Dark - Transparent'
  'Outline Red - White', // remove
  'Filled - Dark', // focus and disabled need updating
];
const setTwo = [
  'Outline Red - Dark', // remove
  'Filled - White', // focus and disabled needs updating
  'Outline - White', // focus and disabled needs updating
  'Link - White', // disabled and hover state needs updating
];
const setThree = [
  'Link - Red', // remove and replaced with 'Link - Steel'
  'Link - Dark', // disabled state needs updating
  'Link - Steel', // double check styling
  'Outline Dark - Midnight', // remove
  'Outline Dark - Transparent', // update hover, focus, and disabled state
  'Outline Red - White', // remove
  'Outline Red - Dark', // remove
];

const ButtonGroup = ({ variant }) => {
  return (
    <>
      <p className="heading">{variant}</p>
      <Row>
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="sm"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="md"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="lg"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="xl"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="xxl"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
      </Row>
      <Row>
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="sm"
          classes="hovered"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="md"
          classes="hovered"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="lg"
          classes="hovered"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="xl"
          classes="hovered"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="xxl"
          classes="hovered"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
      </Row>
      <Row>
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="sm"
          classes="focused"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="md"
          classes="focused"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="lg"
          classes="focused"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="xl"
          classes="focused"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="xxl"
          classes="focused"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
      </Row>
      <Row>
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="sm"
          classes="disabled"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="md"
          classes="disabled"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="lg"
          classes="disabled"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="xl"
          classes="disabled"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
        <CallToAction
          url="/"
          label="Start a Free Trial"
          variant={variant}
          size="xxl"
          classes="disabled"
          prevIcon="fa-solid fa-chevron-right"
          nextIcon="fa-solid fa-chevron-right"
        />
      </Row>
    </>
  );
};

const Test = () => {
  return (
    <Container>
      <Wrapper backgroundColor="#ffffff">
        {setOne.map(variant => (
          <ButtonGroup key={variant} variant={variant} />
        ))}
      </Wrapper>
      <Wrapper backgroundColor="#071621">
        {setTwo.map(variant => (
          <ButtonGroup key={variant} variant={variant} />
        ))}
      </Wrapper>
      <Wrapper backgroundColor="#ffffff">
        {setThree.map(variant => (
          <ButtonGroup key={variant} variant={variant} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Test;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  padding: 48px 0px;
  margin: 0px auto;
  border: 1px solid red;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 48px 32px;
  background-color: ${props => props.backgroundColor};
  .heading {
    ${font('display', 'xs', '700')}
    color: ${props =>
      props.backgroundColor === '#ffffff' ? '#071621' : '#ffffff'};
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;
