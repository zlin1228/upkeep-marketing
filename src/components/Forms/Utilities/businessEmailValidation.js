const INVALID_EMAILS = [
  '@gmail.com',
  '@yahoo.com',
  '@aol.com',
  '@hotmail.com',
  '@comcast.net',
  '@outlook.com',
  '@icloud.com',
  '@gmx.com',
];

export default email => {
  const indexOfAtSign = email.indexOf('@');
  return !INVALID_EMAILS.includes(email.slice(indexOfAtSign));
};
