import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB",
  description:
    "This is movie website review your movies created by Jagdish Kumawat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
