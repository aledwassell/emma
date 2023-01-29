const apiUrlProd = process.env.API_URL_PROD;
const apiUrlDev = process.env.API_URL_DEV;
export let fetchUrl: string;
if (apiUrlProd) {
  fetchUrl = `https://${apiUrlProd}`;
} else if (apiUrlDev) {
  fetchUrl = `https://${apiUrlDev}`;
} else {
  fetchUrl = 'http://localhost:3000';
}

export interface Quote {
  id: string;
  title: string;
  content: string;
  created: string;
}
