import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

//TODO discuss the metadata details with the client
export const metadata = {
  title: 'Elemran Construction Ltd.',
  description:
    'Elemran Construction Ltd. - Quality construction services for residential and commercial projects.',
  openGraph: {
    title: 'Elemran Construction Ltd.',
    description:
      'Discover our quality construction services for residential and commercial projects.',
    url: 'https://www.elemranconstruction.com',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Elemran Construction Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@elemranconstruction',
    title: 'Elemran Construction Ltd.',
    description: 'Building Your Vision with Quality and Integrity.',
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
