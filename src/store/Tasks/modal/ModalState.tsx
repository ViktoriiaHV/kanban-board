import { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(<>LOL</>)

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, content, setContent }}>
      {children}
    </ModalContext.Provider>
  );
};
