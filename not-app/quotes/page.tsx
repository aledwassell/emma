import Link from 'next/link';
import styles from './Notes.module.css';
import QuoteCard from '../../components/QuoteCard';
import CreateQuote from '../../components/CreateQuote';
import DeleteQuote from '../../components/DeleteQuote';
import { FETCH_URL, Quote } from '../../utils/constants';

async function getQuotes(): Promise<Quote[]> {
  const res = await fetch(`${FETCH_URL}/api/quote`, { method: 'GET' });
  const data = await res.json();
  return data;
}

export default async function NotesPage() {
  const quotes = await getQuotes();

  return (
    <div>
      <h1>Quotes!!</h1>
      <div className={styles.grid}>
        {quotes?.map(quote => {
          return (
            <div key={quote.id}>
              <Link href={`/quotes/${quote.id}`}>
                <QuoteCard data={quote} />
              </Link>
              <DeleteQuote id={quote.id} />
            </div>
          );
        })}
      </div>

      <CreateQuote />
    </div>
  );
}
