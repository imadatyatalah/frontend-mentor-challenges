import Head from "next/head";

import Header from "../header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/images/favicon-32x32.png"
          type="image/x-icon"
        />
        <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
