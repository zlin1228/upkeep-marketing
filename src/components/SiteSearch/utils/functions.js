import axios from 'axios';

const parseJSONResponse = response => {
  try {
    const parsedJSON = JSON.parse(response);

    if (parsedJSON && parsedJSON.questions) {
      return parsedJSON.questions.length > 0
        ? parsedJSON.questions
        : 'No questions found.';
    }
    throw new Error('JSON object is missing required fields.');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return 'Data not found or invalid JSON format.';
  }
};

export const handleSuggestedSearch = async ({
  e,
  searchValue,
  setSuggestions,
  setLoadingSuggestedSearch,
}) => {
  e.preventDefault();

  if (!searchValue) {
    return;
  }
  try {
    setLoadingSuggestedSearch(true);

    const prompt = [
      {
        role: 'system',
        content:
          'You are an expert in UpKeep maintenance management and CMMS, assisting a user who is new to this field.',
      },
      {
        role: 'user',
        content: `Create a JSON array of 3-5 questions based on the current search input value: "${searchValue}". Only respond with the JSON object, no explanation is needed.`,
      },
    ];

    const { data } = await axios.post('/api/json-completion', {
      prompt,
    });

    const response = parseJSONResponse(data);

    setSuggestions(response || []);
    setLoadingSuggestedSearch(false);
  } catch (error) {
    console.error(error);
  }
};
