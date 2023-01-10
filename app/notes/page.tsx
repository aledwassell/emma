import Link from 'next/link';
import styles from './Notes.module.css';
import CreateNote from './CreateNote';
import DeleteNote from './DeleteNote';
import Note from './Note';

import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../firestore';

async function getNotes() {
  const notes = await getDocs(collection(db, 'notes'));
  return notes.docs.map(doc => ({id: doc.id, ...doc.data()})) as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes!!</h1>
      <div className={styles.grid}>
        {notes?.map(note => {
          return (
            <div key={note.id}>
              <Link href={`/notes/${note.id}`}>
                <Note note={note} />
              </Link>
              <DeleteNote id={note.id} />
            </div>
          );
        })}
      </div>

      <CreateNote />
    </div>
  );
}
