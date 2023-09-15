"use client";
import React, { ButtonHTMLAttributes } from "react";
import { useStoreContext } from "app/[lng]/store-provider";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const MenuButton = ({ children }: Props) => {
  const { setIsMenuOpen } = useStoreContext();
  return <button onClick={() => setIsMenuOpen(true)}>{children}</button>;
};

export default MenuButton;
