import '@/app/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: any) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <div>
                <Component {...pageProps} />
            </div>
        </>
    )
}
