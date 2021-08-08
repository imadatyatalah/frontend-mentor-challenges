import React from "react";

import Header from "@/components/header";

const Global = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="bg-very-light-gray">{children}</main>
  </>
);

export default Global;
