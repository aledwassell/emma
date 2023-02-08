import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CreateQuote from 'components/CreateQuote';
import Link from 'next/link';

export default function create() {
  return (
    <>
      <Link href={'/'}>
        <FontAwesomeIcon icon={['fas', 'trash']} />
      </Link>
      <CreateQuote />
    </>
  );
}
