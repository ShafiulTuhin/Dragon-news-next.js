import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dragoon News - Home",
  description: "A room is containing full world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={` h-full antialiased`}>
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
