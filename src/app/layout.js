import "./globals.css";
// 👇 ADD THIS IMPORT STATEMENT AT THE TOP 👇
import Navbar from "@/components/layout/Navbar"; 

export const metadata = {
  title: "D & M Cables | Premium Manufacturing",
  description: "Leading manufacturer of Aluminium Ingots, Wire Rods, and Conductors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        {/* Now that it is imported above, this will work perfectly! */}
        <Navbar />
        
        <div className="pt-20"> 
          {children}
        </div>
      </body>
    </html>
  );
}