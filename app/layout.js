import { Oswald, Josefin_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weights: ["400", "700"], 
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weights: ["300", "600"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className= {`${oswald.variable} ${josefinSans.variable} antialiased flex justify-center items-center min-h-screen bg-dark-green px-3 sm:px-4 `}
      >
        {children}
      </body>
    </html>
  );
}