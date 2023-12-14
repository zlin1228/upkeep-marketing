import React, { useState, useRef } from 'react';
import { useWindowSize } from 'react-use';

import Buttons from './components/Buttons';
import Checklist from './components/Checklist';
import ChecklistForm from './components/ChecklistForm';
import Recommendations from './components/Recommendations';

import { breakpointNumbers } from '../../../atoms/breakpoints';

import { Container, Wrapper, Sidebar, Content } from './styles/index.styled';

const ChecklistGenerator = () => {
  const [prompts, setPrompts] = useState([]);
  const [completions, setCompletions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingAdditonal, setLoadingAdditonal] = useState(false);
  const [checklistData, setChecklistData] = useState({
    title: '',
    description: 'Your tailor-made checklist will be displayed right here!',
    list: [],
  });
  const [filterSettings, setFilterSettings] = useState({
    checklistType: '',
    frequency: '',
    industry: '',
    assetType: '',
  });
  const [errors, setErrors] = useState({
    checklistType: '',
    frequency: '',
    industry: '',
    assetType: '',
  });

  const checklistRef = useRef(null);
  const { width } = useWindowSize();
  const { xl } = breakpointNumbers;

  return (
    <Container>
      <Wrapper>
        <Sidebar>
          <ChecklistForm
            filterSettings={filterSettings}
            setFilterSettings={setFilterSettings}
            prompts={prompts}
            setPrompts={setPrompts}
            completions={completions}
            setCompletions={setCompletions}
            setChecklistData={setChecklistData}
            setLoading={setLoading}
            errors={errors}
            setErrors={setErrors}
          />
          {width >= xl && (
            <Recommendations setFilterSettings={setFilterSettings} />
          )}
        </Sidebar>
        <Content ref={checklistRef}>
          <Buttons checklistRef={checklistRef} checklistData={checklistData} />
          <Checklist
            checklistData={checklistData}
            setChecklistData={setChecklistData}
            prompts={prompts}
            setPrompts={setPrompts}
            completions={completions}
            setCompletions={setCompletions}
            filterSettings={filterSettings}
            loading={loading}
            setLoading={setLoading}
            loadingAdditonal={loadingAdditonal}
            setLoadingAdditonal={setLoadingAdditonal}
          />
          {width < xl && (
            <Recommendations setFilterSettings={setFilterSettings} />
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default ChecklistGenerator;
