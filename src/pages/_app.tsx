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
          <meta
            name="description"
            content="Tecnología avanzada para un futuro sin límites."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="keywords"
            content="VinciBlock, Blockchain, Tecnología blockchain, Cadena de bloques, Bitcoin, Ethereum, Binance, Gnosis Chain, Tron, Solidity, Smart Contract, Desarrollo de software, Desarrollo, Desarrollo de productos tecnológicos, Personalización tecnológica, Software, Auditoría, Auditoría de seguridad, Ciberseguridad, Seguridad digital avanzada, Soluciones digitales, Inteligencia artificial, Reconocimiento facial, Realidad aumentada, Tokenización, Desarrollo de exchanges, Aplicaciones móviles, Innovación tecnológica, Transformación digital, Eficiencia operativa"
          />
          <meta property="og:title" content="VinciBlock" />
          <meta
            property="og:description"
            content="Tecnología avanzada para un futuro sin límites."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dk2al2urj/image/upload/v1709847641/vinciblock-logo_iremgs.jpg"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bigContainer">
          <div className="container">
            <Header />
            <ToastContainer />
            <Component {...pageProps} />
            <BackTopButton />
            <Footer />
          </div>
        </main>
      </I18nextProvider>
    </>
  );
}
