import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/Component/Header";
import { DarkThemeProvider } from "@/utilities/DarkThemeProvider";
import NextTopLoader from "nextjs-toploader";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "spurtCMS Blog Template-4",
  description: "spurtCMS Blog Template-4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
      <DarkThemeProvider>
        {/* <main className="bg-white"> */}
        <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={4}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
        />
        <Header/>
          {children}
        {/* </main> */}
        </DarkThemeProvider>
      </body>
    </html>
  );
}


