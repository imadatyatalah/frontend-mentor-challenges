import React from "react";

import Header from "../components/Header";

const Global = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Global;
