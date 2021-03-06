import React from "react";

import Header from "@/components/Header";

const Global = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Global;
