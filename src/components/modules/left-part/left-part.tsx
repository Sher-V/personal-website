import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";

const LeftPart: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div
      className={
        "hidden lg:flex border-r-2 h-screen items-center justify-center fixed w-full max-w-300 z-10"
      }
    >
      <div>
        <div className={"font-extrabold text-lg text-black"}>SherV Dev</div>
        <div className={"mt-8 font-medium"}>
          <ul>
            <li>
              <Link href={"/"}>
                <a
                  className={
                    router.pathname === "/" ? "text-black tracking-lg" : ""
                  }
                >
                  {t("menu.home")}
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <a
                  className={
                    router.pathname === "/about" ? "text-black tracking-lg" : ""
                  }
                >
                  {t("menu.about")}
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/resume"}>
                <a
                    className={
                      router.pathname === "/resume" ? "text-black tracking-lg" : ""
                    }
                >
                  {t("menu.resume")}
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/portfolio"}>
                <a
                  className={
                    router.pathname === "/portfolio"
                      ? "text-black tracking-lg"
                      : ""
                  }
                >
                  {t("menu.portfolio")}
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <a
                  className={
                    router.pathname === "/contact"
                      ? "text-black tracking-lg"
                      : ""
                  }
                >
                  {t("menu.contact")}
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={"mt-8 italic text-gray-light"}>
          <p>
            <Trans>{t("created.by")}</Trans>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftPart;
