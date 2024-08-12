import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//TODO discuss the metadata details with the client
export const metadata = {
  title: "Elemran Construction Ltd.",
  description: "Elemran Construction Ltd. - Quality construction services for residential and commercial projects.",
  openGraph: {
    title: "Elemran Construction Ltd.",
    description: "Discover our quality construction services for residential and commercial projects.",
    url: "https://www.elemranconstruction.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Elemran Construction Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@elemranconstruction",
    title: "Elemran Construction Ltd.",
    description: "Building Your Vision with Quality and Integrity.",
    image: "/images/twitter-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
