import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import "@arco-design/web-react/dist/css/arco.css";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;