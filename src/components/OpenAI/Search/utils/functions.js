export const sampleQuestions = [
  'What is UpKeep Edge?',
  "Tell me about UpKeep's connected and secure IoT Sensors with real-time monitoring.",
  'What Is MRO Inventory? ',
  'Where can I find information about UpKeep’s Products?',
];

export const combineArrays = (questions, responses) => {
  const combinedArray = [];
  for (let i = 0; i < questions.length && i < responses.length; i++) {
    combinedArray.push(questions[i]);
    combinedArray.push(responses[i]);
  }
  return combinedArray;
};
