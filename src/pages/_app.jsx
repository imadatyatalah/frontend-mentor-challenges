import Global from "../layout/Global";

import "../styles/main.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Global>
        <Component {...pageProps} />
      </Global>
    </>
  );
};

export default MyApp;
