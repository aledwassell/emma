import QuoteCard from 'components/QuoteCard';
import { GetServerSideProps } from 'next';
import styles from '../styles/Quotes.module.scss';
import { FETCH_URL, Quote } from '../utils/constants';

type Props = {
  quotes: readonly Quote[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const url = `${FETCH_URL}/api/quote`;
  const res = await fetch(url, { method: 'GET', next: { revalidate: 10 } });
  const quotes = await res.json();
  return { props: { quotes } };
};

export default function Home({ quotes }: Props) {
  const size = quotes.length;
  const columns = [quotes.slice(0, size / 2), quotes.slice(size / 2, size)];
  return (
    <div>
      <div className={styles.grid}>
        {columns?.map((column: Quote[], index) => {
          return (
            <div
              key={index}
              className={styles.column}>
              {column?.map((quote: Quote) => {
                return (
                  <div key={quote.id}>
                    <QuoteCard data={quote} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
