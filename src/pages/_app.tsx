import { AppProps } from 'next/app';
import React from 'react';
import '../styles/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
