import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

// App Inicializa todas as páginas
function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>React Avançado - Boilerplate</title>
                <link rel="shortcut icon" href="/vercel.svg" />
                <link rel="apple-touch-icon" href="/vercel.svg" />
                <meta
                    name="description"
                    content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
                />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default App;
