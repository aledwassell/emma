import {NextApiRequest, NextApiResponse} from 'next';

// import {collection, getDocs} from 'firebase/firestore';
// import {db} from '../../firestore';

// async function getNotes() {
//   const notes = await getDocs(collection(db, 'notes'));
//   return notes.docs.map(doc => ({id: doc.id, ...doc.data()})) as any[];
// }

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     res.json({body: 'posting'});
//   }

//   if (req.method === 'GET') {
//     console.log(getNotes());
//     res.json([
//       {asdasdf: 'asdfasdf'}
//     ]);
//   }
// }

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
