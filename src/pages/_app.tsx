import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { I18nextProvider } from "react-i18next";
import i18n from "../translations/i18n";
import ToastContainer from "@/components/toast";
import { BackTopButton } from "@/components/Buttons/buttons";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Head>
          <title>VinciBlock</title>
          <meta name="description" content="VinciBlock exchange" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bigContainer">
          <div className="container">
            <Header />
            <ToastContainer/>
            <Component {...pageProps} />
            <BackTopButton/>
            <Footer />
          </div>
        </main>
        
      </I18nextProvider>
    </>
  );
}
