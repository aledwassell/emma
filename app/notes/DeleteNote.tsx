'use client';

import {useRouter} from 'next/navigation';

export default function DeleteNote(params: any) {
  const router = useRouter();
  const deleteNote = async () => {
    fetch(`http://localhost:3000/api/quote/${params.id}`, {
      method: 'DELETE',
    }).then(() => router.refresh());
  };

  return <button onClick={deleteNote}>Delete note</button>;
}
