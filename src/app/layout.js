import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

//TODO discuss the metadata details with the client
export const metadata = {
  title: 'Spotless AS',
  description: 'Spotless AS vaskhjelp firma i Oslo og viken',
  openGraph: {
    title: 'Spotless AS',
    description: '',
    url: 'https://www.spotless.no',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Spotless',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@spotless AS',
    title: 'spotless AS.',
    description: '',
    image: '/images/twitter-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
