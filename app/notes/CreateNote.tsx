'use client';

import {useRouter} from 'next/navigation';
import {useState} from 'react';

import {collection, addDoc} from 'firebase/firestore';
import {db} from './page';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async () => {
    const collectionRef = collection(db, 'notes');
    await addDoc(collectionRef, {
      title,
      content,
      created: new Date().toDateString(),
    });

    setContent('');
    setTitle('');

    router.refresh();
  };

  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  );
}
