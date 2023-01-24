export const fetchUrl = process.env.API_URL?.length
  ? 'https://' + process.env.API_URL
  : 'http://localhost:3000';

export interface Quote {
  id: string;
  title: string;
  content: string;
  created: string;
}
