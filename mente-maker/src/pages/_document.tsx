import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
         {/* Favicon */}
         <link rel="icon" href="/logo.png" />
          {/* <img src="/images/logo/logo.png" alt="Logo" /> */}
          
          {/* Open Graph (para compartilhamento no Facebook, WhatsApp, etc.) */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Mente Maker" />
          <meta property="og:description" content="Tecnologia, Robótica e Programação" />
          <meta property="og:image" content="/logo.png" /> {/* Caminho do seu ícone ou imagem de destaque */}
          <meta property="og:url" content="https://www.mentemaker.com.br" />
          
          {/* Twitter Card (para compartilhamento no Twitter) */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mente Maker" />
          <meta name="twitter:description" content="Tecnologia, Robótica e Programação" />
          <meta name="twitter:image" content="/logo.png" />

        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
