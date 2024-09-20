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
          href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans-serif ">
        <Header />
        <main className="flex flex-col items-center justify-between  gap-24 lg:gap-36">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
