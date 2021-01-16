import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/images/favicon-32x32.png"
          type="image/x-icon"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
