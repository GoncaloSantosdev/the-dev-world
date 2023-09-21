import "./globals.css";
import { Inter } from "next/font/google";
// Components
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="
      "
      >
        <div className="container mx-auto px-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
