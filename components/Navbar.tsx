import Link from 'next/link';
import styles from '../styles/Nav.module.scss';

interface RouterLink {
  route: string;
  routeName: string;
}

const LINKS = [
  {route: '/', routeName: 'Home'},
  {route: '/create', routeName: 'Create'},
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      {LINKS?.map((link: RouterLink, index: number) => {
        return (
          <Link key={index} href={link.route}>
            {link.routeName}
          </Link>
        );
      })}
    </nav>
  );
}
