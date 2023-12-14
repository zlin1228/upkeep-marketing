import React, { useState, useRef, useEffect } from 'react';
import { useWindowSize } from 'react-use';

import ListItem from './components/ListItem';

import {
  Header,
  Line,
  ListWrapper,
  List,
  ListHeading,
  Section,
  Stroke,
  Wrapper,
} from './styles/index.styled';

const EdgeIllustration = ({ component }) => {
  const { width } = useWindowSize();
  const imageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    }
  }, [width]);

  const { heading, listItem, subhead } = component;

  return (
    <Section>
      <Wrapper>
        {(heading || subhead) && (
          <Header>
            {heading && <p className="heading">{heading}</p>}
            {subhead && (
              <div
                className="subhead"
                dangerouslySetInnerHTML={{ __html: subhead }}
              />
            )}
          </Header>
        )}

        <ListWrapper>
          <ListHeading>Real Time Monitoring & Alerting</ListHeading>
          <List numOfItems={listItem.length || 3}>
            <Stroke height={imageHeight}>
              <Line />
            </Stroke>
            {listItem.map(item => (
              <ListItem
                key={listItem.id}
                imageRef={imageRef}
                spacerHeight={imageHeight}
                {...item}
              />
            ))}
          </List>
        </ListWrapper>
      </Wrapper>
    </Section>
  );
};

export default EdgeIllustration;
