import Layout from "../layout";

import "tailwindcss/tailwind.css";
import "@fontsource/alata";
import "@fontsource/josefin-sans/300.css";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
