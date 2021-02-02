import type { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "styles/global";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>React avançado - Boilerplate</title>
                <link rel="shortcut icon" href="/img/icon-192.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <meta
                    name="description"
                    content="Iniciando projeto simples com desenvolvimento em TypeScript, React, NextJS e Styled Components"
                />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default App;
