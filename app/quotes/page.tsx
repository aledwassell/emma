import Link from 'next/link';
import styles from './Notes.module.css';
import QuoteCard from './QuoteCard';
import CreateQuote from './CreateQuote';
import DeleteQuote from './DeleteQuote';
import {fetchUrl, Quote} from '../../utils/constants';

async function getQuotes(): Promise<Quote[]> {
  // const res = await fetch(`${fetchUrl}/api/quote`, {method: 'GET'});
  // const data = await res.json();
  return [
    {id: 'asdfdf', title: 'asdfdf', content: 'asdfdf', created: 'asdfdfd'},
  ];
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
