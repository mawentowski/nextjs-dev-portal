import 'docs/styles/globals.css';
import { useRef, useEffect } from 'react';

// https://nextjs.org/docs/advanced-features/custom-app

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
