import React, { useRef } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { ModalWrapper } from "@element/modal-wrapper";
import { reset } from "@store/modal";
import { useRouter } from "next/router";

interface Props {}

const MobileMenu: React.FC<Props> = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  // 8-800-70-700-70 доб 55740343

  const hdlCl = (url) => () => {
    router.push(url).then(() => reset());
  };

  return (
    <ModalWrapper className={"self-stretch"}>
      <ul className={"text-secondary"}>
        <li>
          <Link href={"/"}>
            <a onClick={hdlCl('/')}>{t("menu.home")}</a>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <a onClick={hdlCl('/about')}>{t("menu.about")}</a>
          </Link>
        </li>
        <li>
          <Link href={"/resume"}>
            <a onClick={hdlCl('/resume')}>{t("menu.resume")}</a>
          </Link>
        </li>
        <li>
          <Link href={"/portfolio"}>
            <a onClick={hdlCl('/portfolio')}>{t("menu.portfolio")}</a>
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>
            <a onClick={hdlCl('/contact')}>{t("menu.contact")}</a>
          </Link>
        </li>
      </ul>
    </ModalWrapper>
  );
};

export default MobileMenu;
