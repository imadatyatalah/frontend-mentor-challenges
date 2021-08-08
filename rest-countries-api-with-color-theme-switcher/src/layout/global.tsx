import React from "react";

import Header from "@/components/header";

const Global = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="">{children}</main>
  </>
);

export default Global;
