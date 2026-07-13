import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // The '@' symbol points directly to the 'src' directory!

export const metadata = {
  title: "D & M Cables | Premium Manufacturing",
  description: "Leading manufacturer of Aluminium Ingots, Wire Rods, and Conductors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {/* We place the Navbar here so it stays fixed on top of every page */}
        <Navbar />
        
        {/* 'children' represents whatever page you are currently viewing */}
        <div className="pt-20"> 
          {children}
        </div>
      </body>
    </html>
  );
}