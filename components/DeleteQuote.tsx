import {useRouter} from 'next/router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from '../styles/Quotes.module.scss';

export default function DeleteQuote(params: any) {
  const router = useRouter();

  const deleteQuote = async () => {
    await fetch(`/api/quote/${params.id}`, {
      method: 'DELETE',
    });
    router.replace(router.asPath);
  };

  return (
    <>
      <button className={styles.deleteButton} onClick={deleteQuote}>
        <FontAwesomeIcon icon={['fas', 'trash']} />
      </button>
    </>
  );
}
