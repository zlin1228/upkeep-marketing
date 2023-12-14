import React from 'react';
import shortid from 'shortid';

import Icon from '../../../../molecules/Icon';

import Loader from './Loader';

import { color } from '../../../../atoms/colors';

import { deleteListItem, updateChecklist } from '../utils/functions';

import {
  Container,
  Loading,
  Button,
  DeleteButton,
} from '../styles/Checklist.styled';

const Checklist = ({
  checklistData: { title, description, list },
  setChecklistData,
  prompts,
  completions,
  setCompletions,
  filterSettings,
  loading,
  loadingAdditonal,
  setLoadingAdditonal,
}) => {
  if (loading) {
    return (
      <Container className="checklist">
        <Loading>
          <Loader />
          Building your customized checklist, loading in progress...
        </Loading>
      </Container>
    );
  }

  return (
    <Container className="checklist">
      {title && <p className="title">{title}</p>}
      {description && <p className="description">{description}</p>}
      {list.length > 0 && (
        <ol className="list">
          {list.map((item, index) => (
            <li key={shortid.generate()}>
              <span>
                {index + 1}. {item}
              </span>
              <DeleteButton
                onClick={() =>
                  deleteListItem({
                    index,
                    title,
                    description,
                    list,
                    setChecklistData,
                  })
                }
              >
                <Icon
                  id="fa-solid fa-delete-left"
                  fillColor={color.primary[1000]}
                />
              </DeleteButton>
            </li>
          ))}
        </ol>
      )}
      {list.length > 0 && (
        <>
          {loadingAdditonal ? (
            <Loader />
          ) : (
            <Button
              onClick={() =>
                updateChecklist({
                  prompts,
                  completions,
                  setCompletions,
                  filterSettings,
                  checklistData: { title, description, list },
                  setChecklistData,
                  setLoadingAdditonal,
                })
              }
            >
              Add 5 more items
              <Icon id="fa-solid fa-plus" fillColor={color.darkBlue[1000]} />
            </Button>
          )}
        </>
      )}
    </Container>
  );
};

export default Checklist;
