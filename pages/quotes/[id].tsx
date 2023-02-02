import QuoteCard from '../../components/QuoteCard';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

export default function QuotePage() {
  const router = useRouter();
  const id = router.query.id as string;
  const [quote, setQuote] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`/api/quote/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(quote => {
        setQuote(quote);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!quote) return <p>No profile data</p>;

  return (
    <div>
      <h1>quote/{id}</h1>
      <QuoteCard data={quote} />
    </div>
  );
}
