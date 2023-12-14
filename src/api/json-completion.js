/* eslint-disable no-return-await */
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.GATSBY_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const createCompletion = async prompt => {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: prompt,
      temperature: 0.5,
      max_tokens: 2000,
    });
    return response.data.choices[0].message.content || 'Error in response';
  } catch (error) {
    throw new Error(error.message || 'Unknown error occurred');
  }
};

const MAX_ATTEMPTS = 3;

const isValidJSON = text => {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
};

const createCompletionWithRetry = async (prompt, attempt = 1) => {
  try {
    const response = await createCompletion(prompt);

    if (isValidJSON(response)) {
      return response;
    }
  } catch (error) {
    console.error(`Error on attempt ${attempt}:`, error);
  }

  if (attempt < MAX_ATTEMPTS) {
    return await createCompletionWithRetry(prompt, attempt + 1);
  }
  throw new Error(
    'Maximum attempts reached. Unable to get a valid JSON response.'
  );
};

const handler = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required' });
    }

    const response = await createCompletionWithRetry(prompt);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default handler;
