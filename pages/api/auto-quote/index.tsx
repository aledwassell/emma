import { NextApiRequest, NextApiResponse } from 'next';
import { AUTO_GEN_API } from 'utils/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let quote;

  try {
    const data = await fetch(`${AUTO_GEN_API}/quote`);
    quote = await data.json();
  } catch (err) {
    console.log(err);
  }

  await res.status(200).send(quote);
}
