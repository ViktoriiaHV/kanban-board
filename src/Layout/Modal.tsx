import { useContext } from "react";
import { ModalContext } from "../store/Tasks/modal/ModalContext";
import { Button } from "./Button";
import { useMountTransition } from "./hooks/useMountTransition";

export const Modal = () => {
  const { isOpen, content, setIsOpen } = useContext(ModalContext);
  const isTransitioned = useMountTransition(isOpen, 400);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  if (isOpen || isTransitioned) {
    return (
      <div className={`modal ${isTransitioned && isOpen && "modal--visible"}`}>
        <div className="modal__backdrop" onClick={onCloseModal}>
          <div
            className={`modal__content ${
              isTransitioned && isOpen && "modal__content--visible"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {content}
            <div>
              <Button onClick={onCloseModal}>Close</Button>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};
