import {NextApiRequest, NextApiResponse} from 'next';
import {doc, getDoc, deleteDoc} from 'firebase/firestore';
import db from '../../../utils/db';
import {FIREBASE_COLLECTION_NAME} from 'utils/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {id} = req.query;
  try {
    switch (req.method) {
      case 'GET':
        getById(res, id as string);
        break;
      case 'DELETE':
        deleteById(res, id as string);
      default:
        res.status(200).end();
        break;
    }
  } catch (e) {
    res.status(400).end();
  }
}

async function getById(res: NextApiResponse, id: string) {
  const note = await getDoc(doc(db, FIREBASE_COLLECTION_NAME, id));
  await res.status(200).json({id: note.id, ...note.data()});
}

async function deleteById(res: NextApiResponse, id: string) {
  const docRef = await doc(db, FIREBASE_COLLECTION_NAME, id);
  await deleteDoc(docRef);
  await res.status(200).end();
}
