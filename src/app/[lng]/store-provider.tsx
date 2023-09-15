"use client";
import { createContext, useState, useContext } from "react";

type Props = {
  children: React.ReactNode;
};

type AllMenu = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const StoreContext = createContext<AllMenu>({ isMenuOpen: false, setIsMenuOpen: () => {} });
export const useStoreContext = () => useContext(StoreContext);

const StoreProvider = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <StoreContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
