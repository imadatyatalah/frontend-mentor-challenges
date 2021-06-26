import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Global = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Global;
