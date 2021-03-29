import { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="mx-auto w-5/6 sm:w-2/3 md:w-3/5">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
