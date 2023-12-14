import React from 'react';
import Header from './components/Header';
import useFormatter from './utils/useFormatter';
import { Section, Wrapper, Text } from './styles/index.styled';

const RichTextBlock = ({ component }) => {
  const { text } = useFormatter(component);
  return (
    <Section theme={component?.theme}>
      <Header component={component} />
      <Wrapper>
        <Text
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </Wrapper>
    </Section>
  );
};

export default RichTextBlock;
