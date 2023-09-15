"use client";
import React from "react";
import { useStoreContext } from "./store-provider";
import ServerComponent from "./ServerComponent";
type Props = {
  children: React.ReactNode;
};

const AllmenuContainer = ({ children }: Props) => {
  const { isMenuOpen } = useStoreContext();
  return (
    <>
      {isMenuOpen && <ServerComponent />}
      {children}
    </>
  );
};

export default AllmenuContainer;
