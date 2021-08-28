import React from "react";
import { Icon } from "@element/icon";
import { ICONS_ENUM } from "@constant/icons";
import { useTranslation } from "next-i18next";
import { Button } from "@element/button";

interface Props {}

const Home: React.FC<Props> = () => {
  const { t } = useTranslation("home");

  return (
    <div className={"flex flex-col justify-center min-h-screen"}>
      <div
        className={
          "flex items-center justify-center flex-col pt-60 xl:flex-row"
        }
      >
        <div
          className={
            "bg-avatar rounded-full bg-cover bg-no-repeat bg-top-0 shadow-avatar min-w-200 min-h-200 md:min-w-300 md:min-h-300"
          }
        />

        <div className={"xl:ml-32"}>
          <h1
            className={
              "uppercase font-extrabold text-black text-2xl text-center md:text-3xl xl:text-left"
            }
          >
            {t("name")}
          </h1>
          <p className={"mt-10 italic font-medium text-center xl:text-left"}>
            {t("description")}
          </p>
          <div className={"mt-8 text-center xl:text-left"}>
            <ul className={"flex justify-center space-x-12 xl:justify-start"}>
              <li className={"inline-block"}>
                <a target={"_blank"} href="https://github.com/Sher-V">
                  <Icon icon={ICONS_ENUM.GITHUB} />
                </a>
              </li>
              <li className={"inline-block"}>
                <a target={"_blank"} href="https://www.upwork.com/freelancers/~012dc24b44d374852f">
                  <Icon icon={ICONS_ENUM.UPWORK} viewBox={"0 0 512 512"} />
                </a>
              </li>
              <li className={"inline-block"}>
                <a target={"_blank"} href="https://www.linkedin.com/in/sher-v/">
                  <Icon icon={ICONS_ENUM.LINKEDIN} viewBox="0 0 455 455" />
                </a>
              </li>
              <li className={"inline-block"}>
                <a target={"_blank"} href="https://t.me/shvadik123">
                  <Icon icon={ICONS_ENUM.TELEGRAM} viewBox="0 0 455 455" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
