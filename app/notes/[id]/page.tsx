import {db} from '../../../firestore';
import Note from '../Note';

import {doc, getDoc} from 'firebase/firestore';

async function getNote(id: string) {
  const note = await getDoc(doc(db, 'notes', id));
  console.log(note.data());
  return {id: note.id, ...note.data()};
}

export default async function NotePage({params}: any) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>note/{note.id}</h1>
      <Note note={note} />
    </div>
  );
}
