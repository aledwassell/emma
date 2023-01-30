import {useRouter} from 'next/router';
import {useState} from 'react';

export default function CreateQuote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async () => {
    await fetch(`/api/quote`, {
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

      router.replace(router.asPath);
    });
  };

  return (
    <form onSubmit={create}>
      <h3>Create a new Quote</h3>
      <input
        type="text"
        placeholder="Author"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Quote"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
}
