import React from 'react';
import 'raf/polyfill';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
