import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A Casa da Alquimia",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
