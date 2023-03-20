export const FETCH_URL = 'https://inspire-quotes-aledwassell.vercel.app';
export const AUTO_GEN_API = 'https://aled-testing.lm.r.appspot.com';

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
