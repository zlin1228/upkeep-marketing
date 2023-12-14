import React from 'react';

import SelectInput from './SelectInput';
import TextInput from './TextInput';

import UpKeepLogo from '../assets/upkeep-logo';
import Stars from '../assets/stars';

import { formFields } from '../utils/data';
import { createChecklist } from '../utils/functions';

import {
  Container,
  Header,
  Form,
  Wrapper,
  Button,
} from '../styles/ChecklistForm.styled';

const ChecklistForm = ({
  filterSettings,
  setFilterSettings,
  prompts,
  setPrompts,
  completions,
  setCompletions,
  setChecklistData,
  setLoading,
  errors,
  setErrors,
}) => (
  <Container>
    <Header>
      <UpKeepLogo />
      Inspection Checklist
    </Header>
    <Form
      onSubmit={e =>
        createChecklist({
          e,
          prompts,
          setPrompts,
          completions,
          setCompletions,
          filterSettings,
          setChecklistData,
          setLoading,
          setErrors,
        })
      }
    >
      <Wrapper>
        {formFields.map(({ type, ...field }) => {
          switch (type) {
            case 'select':
              return (
                <SelectInput
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  options={field.options}
                  value={filterSettings[field.name]}
                  error={errors[field.name]}
                  onChange={e => {
                    setFilterSettings({
                      ...filterSettings,
                      [field.name]: e.target.value,
                    });
                    setErrors({
                      ...errors,
                      [field.name]: '',
                    });
                  }}
                />
              );
            case 'input':
              return (
                <TextInput
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  placeholder={field?.placeholder}
                  value={filterSettings[field.name]}
                  error={errors[field.name]}
                  onChange={e => {
                    setFilterSettings({
                      ...filterSettings,
                      [field.name]: e.target.value,
                    });
                    setErrors({
                      ...errors,
                      [field.name]: '',
                    });
                  }}
                />
              );
            default:
              return null;
          }
        })}
      </Wrapper>
      <Button type="submit" name="submit">
        <Stars />
        Generate Checklist
        <Stars />
      </Button>
    </Form>
  </Container>
);

export default ChecklistForm;
