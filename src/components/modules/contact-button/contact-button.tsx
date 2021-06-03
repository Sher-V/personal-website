import React from "react";

import { openModal } from "@store/modal";

interface Props {
  formType: string;
  title: string;
  description: string;
  btnTitle: string;
}

const ContactButton: React.FC<Props> = ({
  formType,
  title,
  description,
  btnTitle,
}) => {
  const handleClick = () => openModal(formType);

  return (
    <div
      className={
        "border-black border-2 border-orange cursor-pointer p-40 group hover:bg-gray-darkest duration-200 sm:flex-1"
      }
      onClick={handleClick}
    >
      <h3
        className={
          "text-black font-semibold text-lg mb-32 group-hover:text-white"
        }
      >
        {title}
      </h3>
      <p className={"min-h-150 group-hover:text-gray-lightest"}>
        {description}
      </p>
      <div>
        <span className={"uppercase text-orange font-semibold tracking-md"}>
          {btnTitle}
        </span>
      </div>
    </div>
  );
};

export default ContactButton;
