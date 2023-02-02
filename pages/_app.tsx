import Navbar from 'components/Navbar';
import {AppProps} from 'next/app';
import '../styles/globals.scss';
import {Mulish, Philosopher} from '@next/font/google';

const mulish = Mulish({
  subsets: ['latin'],
});

export const philosopher = Philosopher({
  subsets: ['latin'],
  weight: '700',
});

function MyApp({Component, pageProps}: AppProps) {
  return (
    <main className={mulish.className}>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
