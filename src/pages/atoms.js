import React from 'react';

import styled from 'styled-components';

import { font, richTextStyles } from '../atoms/typography';

const fonts = [
  {
    name: 'display',
    sizes: ['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'tiny', 'tiny-sm', 'tiny-xs'],
    weights: [
      {
        name: 'medium',
        weight: '400',
      },
      {
        name: 'semibold',
        weight: '600',
      },
      {
        name: 'bold',
        weight: '700',
      },
      {
        name: 'black',
        weight: '900',
      },
    ],
  },
  {
    name: 'text',
    sizes: ['xl', 'lg', 'md', 'sm', 'xs'],
    weights: [
      {
        name: 'medium',
        weight: '400',
      },
      {
        name: 'semibold',
        weight: '600',
      },
      {
        name: 'bold',
        weight: '700',
      },
      {
        name: 'black',
        weight: '900',
      },
    ],
  },
  {
    name: 'overline',
    sizes: ['lg', 'md', 'sm'],
    weights: [
      {
        name: 'medium',
        weight: '400',
      },
      {
        name: 'semibold',
        weight: '600',
      },
      {
        name: 'bold',
        weight: '700',
      },
      {
        name: 'black',
        weight: '900',
      },
    ],
  },
];

const Typography = () => {
  return (
    <Container>
      <h1>Typography</h1>
      {fonts.map(item =>
        item.sizes.map(size => (
          <Row key={size}>
            <>
              {item.weights.map(weight => (
                <Item
                  key={`${item.name}-${size}-${weight.weight}`}
                  variant={item.name}
                  size={size}
                  weight={weight.weight}
                >
                  <p>
                    {`${
                      item.name !== 'richText'
                        ? item.name.charAt(0).toUpperCase() + item.name.slice(1)
                        : ''
                    } ${size}`}
                  </p>
                  <p>{weight.name}</p>
                </Item>
              ))}
            </>
          </Row>
        ))
      )}
      <RichText>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>
          Some body text with a <a href="/">link</a> and <span>a span</span>.
        </p>
        <small>A smaller caption text.</small>
        <ul>
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
        </ul>
        <ol>
          <li>Ordered list item 1</li>
          <li>Ordered list item 2</li>
        </ol>
        <blockquote>
          <p>This is a blockquote. It's often used to quote blocks of text.</p>
        </blockquote>
        <img src="https://via.placeholder.com/350" alt="Placeholder" />
      </RichText>
    </Container>
  );
};

const Atoms = () => (
  <>
    <Typography />
  </>
);

export default Atoms;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 96px 48px;
  margin: 0px auto;

  h1 {
    ${font('display', 'xxl', 700)}
    text-decoration: underline;
  }
`;

const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;

const Item = styled.div`
  p {
    ${props => font(props.variant, props.size, props.weight)}
  }
`;

const RichText = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${richTextStyles}
`;
