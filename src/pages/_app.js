import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Fonts } from "../components/font";
import Layout from "../components/layout";

const theme = extendTheme({
  fonts: {
    body: "Poppins",
  },
  colors: {
    // Primary colors.
    brandCyan: "#2acfcf",
    brandDarkViolet: "#3b3054",
    // Secondary colors.
    brandRed: "#f46262",
    // Neutral colors.
    brandGray: "#bfbfbf",
    brandGrayishViolet: "#9e9aa7",
    brandVeryDarkBlue: "#35323e",
    brandVeryDarkViolet: "#232127",
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
