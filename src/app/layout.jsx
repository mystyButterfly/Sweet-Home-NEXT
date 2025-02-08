import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Sweet Home NEXT Stylish Furniture for Your Home",
    template: "%s - Sweet Home Next Stylish Furniture",
  },
  description:
    "Discover a stunning selection of stylish and comfortable furniture at Sweet Home. Transform your living space with our unique designs and unbeatable quality.",
  verification: {
    google: 'Ayt25ZWi7Np_UZIqgbzynXUiEC8RXpaW1jYliGntpqk',
  },
  keywords:
    "furniture, home decor, stylish furniture, comfortable furniture, interior design, home improvement, living room, bedroom furniture",
  author: "Sweet Home",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" type="image/png" href="favicon.ico" />
          <link rel="icon" type="image/ico" sizes="16x16" href="/icons/i16.ico" />
          <link rel="icon" type="image/ico" sizes="32x32" href="/icons/i32.ico" />
          <link rel="icon" type="image/ico" sizes="48x48" href="/icons/i48.ico" />
          <link rel="icon" type="image/ico" sizes="64x64" href="/icons/i64.ico" />
          <link rel="icon" type="image/ico" sizes="128x128" href="/icons/i128.ico" />
          <link rel="icon" type="image/ico" sizes="180x180" href="/icons/i180.ico" />
          <link rel="icon" type="image/ico" sizes="192x192" href="/icons/i192.ico" />
      </head>
      <body>
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
