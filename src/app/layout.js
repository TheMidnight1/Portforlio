import "./globals.css";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Saugat Balami | Portfolio",
  description:
    "Portfolio of Saugat Balami - Data Analyst, Aspiring Data Scientist, and Web Developer.",
  icons: {
    icon: "/images/sb.png", // favicon path in `public/images/sb.png`
    apple: "/images/sb.png", // optional for iOS
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}