import React from "react";
import { useTranslation } from "next-i18next";
import { MenuIcon } from "@heroicons/react/solid";

import { openModal } from "@store/modal";
import Link from "next/link";

const MobileHeader: React.FC = () => {
  const { t } = useTranslation("common");

  const handleClick = () => openModal("menu");

  return (
    <div
      className={
        "px-20 py-20 w-full bg-white fixed z-10 flex justify-between items-center lg:hidden"
      }
    >
      <Link href={"/"}>
        <a className={"font-extrabold text-lg text-black block"}>
          {t("company.title")}
        </a>
      </Link>
      <div>
        <MenuIcon onClick={handleClick} className={"w-25 h-25 text-black"} />
      </div>
    </div>
  );
};

export default MobileHeader;
