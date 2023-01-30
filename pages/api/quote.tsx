import {NextApiRequest, NextApiResponse} from 'next';
import {collection, addDoc, getDocs} from 'firebase/firestore';
import db from '../../utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case 'GET':
        getQuotes(res);
        break;
      case 'POST':
        createQuote(req, res);
        break;
      default:
        res.status(200).end();
        break;
    }
  } catch (e) {
    res.status(400).end();
  }
}

async function getQuotes(res: NextApiResponse) {
  const quotes = await getDocs(collection(db, 'notes'));
  const quotesData = quotes.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  await res.status(200).send(quotesData);
}

async function createQuote(req: NextApiRequest, res: NextApiResponse) {
  const collectionRef = collection(db, 'notes');
  await addDoc(collectionRef, req.body);
  await res.status(200).end();
}
