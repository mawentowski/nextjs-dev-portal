import { Html, Head, Main, NextScript } from 'next/document';

// Where you add fonts

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato&family=Lora:wght@500&family=Merriweather&family=Montserrat&family=Open+Sans:wght@300;400&family=Playfair+Display&family=Questrial&family=Roboto&family=Roboto+Slab&family=Signika+Negative&display=swap"
                    rel="stylesheet"
                />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Roboto&family=Source+Code+Pro&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
