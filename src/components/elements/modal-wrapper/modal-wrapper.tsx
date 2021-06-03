import React, { useRef } from "react";
import { XIcon } from "@heroicons/react/solid";
import clsx from "clsx";

import { reset } from "@store/modal";
import { useClickOutside } from "@hook";

interface Props {
  className?: string;
}

const ModalWrapper: React.FC<Props> = ({ children, className }) => {
  const modalRef = useRef<HTMLDivElement>();
  const isClosing = useRef(false);

  const handleClose = () => {
    if (isClosing.current) return;

    isClosing.current = true;

    const handler = () => {
      modalRef.current.removeEventListener("animationend", handler);
      reset();
    };

    modalRef.current.addEventListener("animationend", handler);
    modalRef.current.className += " animate-modalOut";
  };

  useClickOutside(modalRef, handleClose);

  return (
    <div
      className={
        "fixed left-0 w-full h-full bg-black bg-opacity-60 text-black overflow-auto z-50"
      }
    >
      <div
        className={
          "absolute w-full min-h-full flex items-center justify-center md:py-60"
        }
      >
        <div
          ref={modalRef}
          className={clsx(
            "bg-white p-40 relative animate-modalIn w-full md:max-w-600",
            { [className]: !!className }
          )}
        >
          <button
            onClick={handleClose}
            className={"absolute right-40 top-40 z-40"}
          >
            <XIcon className="w-20 h-20" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
