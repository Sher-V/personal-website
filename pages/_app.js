import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import "../styles/global.css";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta
        name="keywords"
        content="javascript freelancer, javascript developer, frontend freelancer, ReactJS developer, dev, NodeJS, freelance, freelancer, resume, hire, javascript, portfolio"
      />
      <meta name="author" content="Sheremetov Vadim" />
      <meta
        name="description"
        content="Hire an expert Frontend engineer for your project. My name is Vadim and I`m a freelancer. I work with javascript, RectJS, NodesJS, HTML5, CSS."
      />
      <title>Frontend Engineer | Freelance | Javascript</title>
    </Head>
    <Component {...pageProps} />
  </>
);
export default appWithTranslation(App);
