import {Quote} from '../utils/constants';
import styles from '../styles/Quotes.module.scss';

export default function QuoteCard({data}: {data: Quote}) {
  const {author, quote, created} = data || {};

  return (
    <div className={styles.note}>
      <h2>{author}</h2>
      <h5>{quote}</h5>
      <p>{created}</p>
    </div>
  );
}
