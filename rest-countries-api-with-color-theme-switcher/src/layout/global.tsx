import React from "react";

import Header from "@/components/header";

const Global = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="custom_max_width">{children}</main>
  </>
);

export default Global;
