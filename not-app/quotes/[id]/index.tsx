import { FETCH_URL } from '../../../utils/constants';
import QuoteCard from '../../../components/QuoteCard';

async function getQuote(id: string) {
  const res = await fetch(`${FETCH_URL}/api/quote/${id}`, {
    method: 'GET',
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export default async function QuotePage({ params }: any) {
  const quote = await getQuote(params.id);

  return (
    <div>
      <h1>quote/{quote.id}</h1>
      <QuoteCard data={quote} />
    </div>
  );
}
