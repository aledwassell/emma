import {useRouter} from 'next/navigation';

export default function DeleteQuote(params: any) {
  const router = useRouter();

  const deleteQuote = async () => {
    await fetch(`/api/quote/${params.id}`, {
      method: 'DELETE',
    });

    router.refresh();
  };

  return <button onClick={deleteQuote}>Delete</button>;
}
