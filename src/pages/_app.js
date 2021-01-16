import Layout from "../components/layout";

import "tailwindcss/tailwind.css";
import "@fontsource/alata"; // Font weight: 400
import "@fontsource/josefin-sans/300.css"; // Font weight: 300

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
