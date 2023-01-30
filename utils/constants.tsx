const apiUrlProd = process.env.API_URL_PROD;
const apiUrlDev = process.env.API_URL_DEV;
export const fetchUrl = 'https://emma-aledwassell.vercel.app';
// export const fetchUrl = 'http://localhost:3000';

export interface Quote {
  id: string;
  title: string;
  content: string;
  created: string;
}
