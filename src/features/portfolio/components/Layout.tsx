import { FC, Fragment } from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Navbar />
      <div
        style={{
          height: 56,
        }}
      />
      {children}
    </Fragment>
  );
};
