export const fetchUrl = 'https://inspire-quotes-aledwassell.vercel.app';
// export const fetchUrl = 'http://localhost:3000';

export interface QuoteImage {
  alt: string;
  height: number;
  url: string;
  width: number;
}

export interface Quote {
  author: string;
  created: string;
  id: string;
  quote: string;
  image?: QuoteImage;
}

export const FIREBASE_COLLECTION_NAME = 'quotes';
