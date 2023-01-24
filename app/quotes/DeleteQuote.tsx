'use client';

import {useRouter} from 'next/navigation';
import {fetchUrl} from '../../utils/constants';

export default function DeleteQuote(params: any) {
  const router = useRouter();
  const deleteQuote = async () => {
    fetch(`${fetchUrl}/api/quote/${params.id}`, {
      method: 'DELETE',
    }).then(() => router.refresh());
  };

  return <button onClick={deleteQuote}>Delete</button>;
}
