export const fetchUrl = 'https://inspire-quotes-aledwassell.vercel.app';
// export const fetchUrl = 'http://localhost:3000';

export interface Quote {
  author: string;
  created: string;
  id: string;
  quote: string;
}

export const FIREBASE_COLLECTION_NAME = 'quotes';
