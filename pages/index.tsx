import CreateQuote from 'components/CreateQuote';
import QuoteCard from 'components/QuoteCard';
import {GetServerSideProps} from 'next';
import Link from 'next/link';
import styles from '../styles/Quotes.module.scss';
import {fetchUrl, Quote} from '../utils/constants';

type Props = {
  quotes: readonly Quote[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const url = `${fetchUrl}/api/quote`;
  const res = await fetch(url, {method: 'GET', next: {revalidate: 10}});
  const quotes = await res.json();
  return {props: {quotes}};
};

export default function Home({quotes}: Props) {
  return (
    <div>
      {/* <div className={styles.pageTitle}>
        <h1 className={philosopher.className}>Aled's favourite quotes</h1>
      </div> */}
      <div className={styles.grid}>
        {quotes?.map((quote: any) => {
          return (
            <div key={quote.id}>
              <Link href={`/${quote.id}`}>
                <QuoteCard data={quote} />
              </Link>
            </div>
          );
        })}
      </div>
      <CreateQuote />
    </div>
  );
}
