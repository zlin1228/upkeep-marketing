import React from 'react';
import shortid from 'shortid';

import { recommendations } from '../utils/data';

import Login from '../assets/login';

import {
  Container,
  Header,
  List,
  ListItem,
  Button,
  Options,
  Option,
} from '../styles/Recommendations.styled';

const Recommendations = ({ setFilterSettings }) => (
  <Container>
    <Header>Don’t know what ask?</Header>
    <List>
      {recommendations.map(
        ({ checklistType, frequency, industry, assetType }) => (
          <ListItem key={shortid.generate()}>
            <Button
              type="button"
              onClick={() =>
                setFilterSettings({
                  checklistType,
                  frequency,
                  industry,
                  assetType,
                })
              }
            >
              <Options>
                <Option>{checklistType}</Option>
                <Option>{frequency}</Option>
                <Option>{industry}</Option>
                <Option>{assetType}</Option>
              </Options>
              <Login />
            </Button>
          </ListItem>
        )
      )}
    </List>
  </Container>
);

export default Recommendations;
