export const fetchUrl = process.env.API_URL?.length
  ? 'https://' + process.env.API_URL
  : 'http://localhost:3000';
