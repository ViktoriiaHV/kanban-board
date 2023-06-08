import React from "react";

export const ModalContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: React.ReactNode;
  setContent: React.Dispatch<React.SetStateAction<JSX.Element>>;
}>({
  isOpen: false,
  setIsOpen: () => false,
  content: <></>,
  setContent: () => <></>
});
