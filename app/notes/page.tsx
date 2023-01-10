import Link from 'next/link';
import styles from './Notes.module.css';
import CreateNote from './CreateNote';
import DeleteNote from './DeleteNote';
import Note from './Note';

import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

import {collection, getDocs} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAQLdCPgc28vpgpIGJam6IIhBtwrQfo5-A',
  authDomain: 'aled-testing.firebaseapp.com',
  projectId: 'aled-testing',
  storageBucket: 'aled-testing.appspot.com',
  messagingSenderId: '862163374972',
  appId: '1:862163374972:web:c1e85cbed108b8edd64af9',
  measurementId: 'G-F7P05H975Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

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
