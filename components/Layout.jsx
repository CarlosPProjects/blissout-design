import Head from "next/head";
import { Inter } from "@next/font/google";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} h-screen flex flex-col`}>
        <Header />
        <div className="flex-grow">
            {children}
        </div>
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Layout;
