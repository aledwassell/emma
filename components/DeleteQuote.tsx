import {useRouter} from 'next/router';

export default function DeleteQuote(params: any) {
  const router = useRouter();

  const deleteQuote = async () => {
    await fetch(`/api/quoteById/${params.id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.status !== 200) return;
      router.replace(router.asPath);
    });
  };

  return <button onClick={deleteQuote}>Delete</button>;
}
