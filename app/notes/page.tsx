import Link from 'next/link';
import styles from './Notes.module.css';
import CreateNote from './CreateNote';
import DeleteNote from './DeleteNote';
import Note from './Note';

async function getQuotes() {
  const res = await fetch('http://localhost:3000/api/quote', {method: 'GET'});
  const data = await res.json();
  return data;
}

export default async function NotesPage() {
  const quotes = await getQuotes();

  return (
    <div>
      <h1>Notes!!</h1>
      <div className={styles.grid}>
        {quotes?.map(note => {
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
