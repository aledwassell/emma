'use client';

import {useRouter} from 'next/navigation';

import {doc, deleteDoc} from 'firebase/firestore';
import {db} from '../../firestore';

export default function DeleteNote(params: any) {
  const router = useRouter();
  const deleteNote = async () => {
    const docRef = doc(db, 'notes', params.id);
    await deleteDoc(docRef).then(() => router.refresh());
  };

  return <button onClick={deleteNote}>Delete note</button>;
}
