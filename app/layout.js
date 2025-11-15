<<<<<<< HEAD
// hello now i want to admin side one page to admin will change or update a websiet text containt
// store text data in mongodb and also store data like page wise > section wise
// and on admin side i want to give each and every text admin will edit


=======
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
// app/layout.js
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import Join from "@/src/components/Join";
import Footer from "@/src/components/Footer";
import SessionProvider from "@/src/components/SessionProvider";
import { getServerSession } from "next-auth";


const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "VirHom",
  description: "Your roadmap to fluency and confidence in English",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${montserrat.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
<<<<<<< HEAD
             {/* <SessionProvider session={session}> */}
=======
             <SessionProvider session={session}>
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
               <Navbar />
          <main>{children}</main>
          <Join />
          <Footer />
<<<<<<< HEAD
             {/* </SessionProvider> */}
=======
             </SessionProvider>
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef
          
      </body>
    </html>
  );
}