import axios from 'axios';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const copyChecklistText = () => {
  const checklistEl = document.querySelector('.checklist');

  if (checklistEl) {
    const titleEl = checklistEl.querySelector('.title');
    const descriptionEl = checklistEl.querySelector('.description');
    const listItems = checklistEl.querySelectorAll('.list li');

    const titleText = titleEl ? titleEl.innerText : '';
    const descriptionText = descriptionEl ? descriptionEl.innerText : '';
    const listText = Array.from(listItems)
      .map(li => li.innerText)
      .join('\n');

    const fullText = `${titleText}\n${descriptionText}\n${listText}`;
    navigator.clipboard.writeText(fullText).then(
      () => {
        console.log('Text copied to clipboard');
      },
      err => {
        console.log('Failed to copy text:', err);
      }
    );
  } else {
    console.error('Checklist container not found');
  }
};

export const downloadChecklistPDF = () => {
  const printableContent = document.querySelector('.checklist');

  const title = printableContent.querySelector('.title')?.innerText || '';
  const description =
    printableContent.querySelector('.description')?.innerText || '';
  const listItems = printableContent.querySelectorAll('.list li');

  const listText = Array.from(listItems)
    .map(item => item.innerText)
    .join('\n');

  const contentText = `${title}\n\n${description}\n\n${listText}`;

  const docDefinition = {
    content: [
      {
        text: contentText,
        fontSize: 14,
      },
    ],
  };

  pdfMake.createPdf(docDefinition).download(`${title}.pdf`);
};

export const parseJSONResponse = response => {
  try {
    const parsedJSON = JSON.parse(response);

    if (
      parsedJSON &&
      parsedJSON.title &&
      parsedJSON.description &&
      parsedJSON.list
    ) {
      return parsedJSON;
    }
    throw new Error('JSON object is missing required fields.');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return 'Data not found or invalid JSON format.';
  }
};

export const parseJSONArrayResponse = response => {
  try {
    const parsedArray = JSON.parse(response);

    if (Array.isArray(parsedArray)) {
      return parsedArray;
    }
    throw new Error('Response is not an array.');
  } catch (error) {
    console.error('Error parsing JSON array:', error);
    return 'Data not found or invalid JSON format.';
  }
};

export const combinePromptsAndCompletions = (prompts, completions) => {
  const combinedArray = [];
  for (let i = 0; i < prompts.length && i < completions.length; i++) {
    combinedArray.push(prompts[i]);
    combinedArray.push(completions[i]);
  }
  return combinedArray;
};

export const generatePrompt = ({ userPrompt, prevCompletions }) => {
  const systemPrompt = {
    role: 'system',
    content:
      'You are an expert in UpKeep maintenance management and CMMS, assisting a user who is new to this field.',
  };

  const prevPrompts = prevCompletions.map((item, index) => {
    return {
      role: index % 2 === 0 ? 'user' : 'system',
      content: item,
    };
  });

  return [systemPrompt, ...prevPrompts, { role: 'user', content: userPrompt }];
};

const validateFilterSettings = ({ filterSettings }) => {
  const validationErrors = {};

  if (!filterSettings.frequency) {
    validationErrors.frequency = 'Frequency is required';
  }

  if (!filterSettings.checklistType) {
    validationErrors.checklistType = 'Checklist type is required';
  }

  if (!filterSettings.assetType) {
    validationErrors.assetType = 'Asset type is required';
  }

  if (!filterSettings.industry) {
    validationErrors.industry = 'Industry is required';
  }

  return validationErrors;
};

export const createChecklist = async ({
  e,
  prompts,
  setPrompts,
  completions,
  setCompletions,
  filterSettings,
  setChecklistData,
  setLoading,
  setErrors,
}) => {
  e.preventDefault();

  setErrors({});

  const validationErrors = validateFilterSettings({ filterSettings });
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setLoading(true);
  setChecklistData({
    title: '',
    description: 'Loading...',
    list: [],
  });

  const userPrompt = `Create a JSON object containing a 'title', 'description', and 'list' for a ${filterSettings.frequency} ${filterSettings.checklistType} checklist for a ${filterSettings.assetType} used in ${filterSettings.industry}. The 'title' should be a suitable title, the 'description' should provide a short explanation of how the checklist can be used in the industry, and the 'list' should contain an array of 10 to 20 strings, each representing an item in the checklist. Only respond with the JSON object, no explanation is needed.`;
  setPrompts([userPrompt, ...prompts]);

  const prevCompletions = combinePromptsAndCompletions(prompts, completions);

  const generatedPrompt = generatePrompt({
    userPrompt,
    prevCompletions,
  });

  const { data } = await axios.post(
    'https://upkeep-search-server.herokuapp.com/generate-checklist',
    {
      prompt: generatedPrompt,
    }
  );
  const response = parseJSONResponse(data);

  setCompletions([...completions, data]);
  setChecklistData(response);
  setLoading(false);
};

export const updateChecklist = async ({
  prompts,
  completions,
  setCompletions,
  filterSettings,
  checklistData: { title, description, list },
  setChecklistData,
  setLoadingAdditonal,
}) => {
  setLoadingAdditonal(true);

  const userPrompt = `Based on the existing ${filterSettings.frequency} ${
    filterSettings.checklistType
  } checklist for a ${filterSettings.assetType} used in ${
    filterSettings.industry
  } with the title "${title}", description "${description}", and list ${JSON.stringify(
    list
  )}, generate an array of 5 additional unique items for the checklist. Only respond with the array of items, no explanation is needed.`;

  const prevCompletions = combinePromptsAndCompletions(prompts, completions);
  const generatedPrompt = generatePrompt({
    userPrompt,
    prevCompletions,
  });

  const { data } = await axios.post('/api/create-checklist', {
    prompt: generatedPrompt,
  });
  const response = parseJSONArrayResponse(data);

  setCompletions([...completions, data]);

  const updatedList = list.concat(response);

  setChecklistData({
    title,
    description,
    list: updatedList,
  });
  setLoadingAdditonal(false);
};

export const deleteListItem = ({
  index,
  title,
  description,
  list,
  setChecklistData,
}) => {
  const newList = list.filter((item, i) => i !== index);
  setChecklistData({ title, description, list: newList });
};
