import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","300","400","500", "600", "700", "800"]
});


export const metadata: Metadata = {
  title: "Twitter dApp",
  description: "A simple project which integrates a blockchain contract built in sepolia etherscan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
