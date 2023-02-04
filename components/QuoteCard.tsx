import {Quote} from '../utils/constants';
import styles from '../styles/Quotes.module.scss';
import {philosopher} from 'pages/_app';
import Image from 'next/image';

export default function QuoteCard({data}: {data: Quote}) {
  const {author, quote, image} = data || {};

  return (
    <div className={styles.quote}>
      {image && (
        <Image
          className={styles.image}
          src={`/${image.url}.jpg`}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      )}
      <h2 className={`${philosopher.className} ${styles.author}`}>{author}</h2>
      <p>
        <span>“</span>
        {quote}
        <span>”</span>
      </p>
    </div>
  );
}
