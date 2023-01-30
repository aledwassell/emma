import CreateQuote from 'components/CreateQuote';
import DeleteQuote from 'components/DeleteQuote';
import QuoteCard from 'components/QuoteCard';
import {GetServerSideProps} from 'next';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';
import {fetchUrl, Quote} from '../../utils/constants';

type Props = {
  quotes: readonly Quote[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const url = `${fetchUrl}/api/quote`;
  await console.log(url);
  const res = await fetch(url, {method: 'GET'});
  const quotes = await res.json();
  return {props: {quotes}};
};

export default function NotesPage({quotes}: Props) {
  return (
    <div>
      <h1>Quotes!!</h1>
      <p>fetchUrl: {fetchUrl}</p>
      <div className={styles.grid}>
        {quotes?.map((quote: any) => {
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
