import React from "react";
import Header from "./components/Header";

export function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
