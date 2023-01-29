import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {fetchUrl} from '../utils/constants';

export default function CreateQuote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async () => {
    await fetch(`${fetchUrl}/api/quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        created: new Date().toDateString(),
      }),
    }).then(() => {
      setContent('');
      setTitle('');

      router.refresh();
    });
  };

  return (
    <form onSubmit={create}>
      <h3>Create a new Quote</h3>
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
      <button type="submit">Create</button>
    </form>
  );
}
