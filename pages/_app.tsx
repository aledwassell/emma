import Navbar from 'components/Navbar';
const { library } = require('@fortawesome/fontawesome-svg-core');
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTrash, faCirclePlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import { Mulish, Philosopher } from '@next/font/google';

library.add(fab, faTrash, faCirclePlus, faHome);

const mulish = Mulish({
  subsets: ['latin'],
});

export const philosopher = Philosopher({
  subsets: ['latin'],
  weight: '700',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className={mulish.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
