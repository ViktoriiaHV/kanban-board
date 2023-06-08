import { useContext } from "react";
import { ModalContext } from "../store/Tasks/modal/ModalContext";
import { Button } from "./Button";

export const Modal = () => {
  const { isOpen, content, setIsOpen } = useContext(ModalContext);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal__backdrop" onClick={onCloseModal}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {content}
        <div>
          <Button onClick={onCloseModal}>Close</Button>
        </div>
      </div>
    </div>
  );
};
