import {useRouter} from 'next/router';

export default function DeleteQuote(params: any) {
  const router = useRouter();

  const deleteQuote = async () => {
    await fetch(`/api/quoteById/${params.id}`, {
      method: 'DELETE',
    }).then(() => {
      router.replace(router.asPath);
    });
  };

  return <button onClick={deleteQuote}>Delete</button>;
}
