import {NextApiRequest, NextApiResponse} from 'next';
import {doc, collection, getDocs, deleteDoc} from 'firebase/firestore';
import db from '../../utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const quotes = await getDocs(collection(db, 'notes'));
      const quotesData = quotes.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).send(quotesData);
    }
    if (req.method === 'DELETE') {
      console.log(req);
      // const docRef = await doc(db, 'notes', '123');
      // await deleteDoc(docRef).then(() => res.status(200));
      res.status(200);
    }
  } catch (e) {
    res.status(400).end();
  }
}