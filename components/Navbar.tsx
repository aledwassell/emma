import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  const { pathname } = useRouter();
  const href = pathname === '/' ? '/create' : '/';
  const icon = pathname === '/' ? 'circle-plus' : 'home';

  return (
    <nav className={styles.nav}>
      <Link href={href}>
        <FontAwesomeIcon icon={['fas', icon]} />
      </Link>
    </nav>
  );
}
