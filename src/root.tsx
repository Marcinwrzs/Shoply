import React from "react";
import Header from "./components/header/Header";

export function Root({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  );
}
