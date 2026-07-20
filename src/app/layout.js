import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "D and M Cables Pvt. Ltd. | Energy Infrastructure",
  description: "Manufacturing premium quality aluminium rods, conductors, and power cable solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-brand-navy antialiased min-h-screen w-screen overflow-x-hidden m-0 p-0 block">
        <Navbar />
        <div className="w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}