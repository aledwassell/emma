export const fetchUrl = 'https://inspire-quotes-aledwassell.vercel.app';
// export const fetchUrl = 'http://localhost:3000';

export interface Quote {
  id: string;
  title: string;
  content: string;
  created: string;
}

export const FIREBASE_COLLECTION_NAME = 'quotes';
