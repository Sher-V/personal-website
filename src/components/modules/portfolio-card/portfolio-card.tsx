import React from "react";
import Image from "next/image";
import { openModal } from "@store/modal";

interface Props {
  src: string;
  id: string;
}

const PortfolioCard: React.FC<Props> = ({ id, src }) => {
  const handleClick = () => openModal(id);

  return (
    <div
      className={
        "aspect-w-3 aspect-h-2 md:aspect-w-8 md:aspect-h-2 flex-1 cursor-pointer group transform hover:scale-105 lg:hover:scale-110 duration-300 delay-200"
      }
      onClick={handleClick}
    >
      <Image
        src={src}
        layout={"fill"}
        objectFit={"cover"}
        objectPosition={"top"}
        alt={"Portfolio card"}
      />
    </div>
  );
};

export default PortfolioCard;
