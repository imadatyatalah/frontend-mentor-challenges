import { DefaultSeo } from "next-seo";

import Global from "../layout/Global";
import SEO from "../../next-seo.config";

import "../styles/main.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />

      <Global>
        <Component {...pageProps} />
      </Global>
    </>
  );
};

export default MyApp;
