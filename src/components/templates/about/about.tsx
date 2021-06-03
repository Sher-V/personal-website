import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import { Button } from "@element/button";
import { useRouter } from "next/router";

const About: React.FC = () => {
  const { t } = useTranslation("about");
  const router = useRouter();

  const handleClick = () => router.push("/resume");

  return (
    <div className={"py-80"}>
      <div
        className={
          "aspect-h-2 aspect-w-2 lg:aspect-w-4 lg:aspect-h-3 xl:aspect-w-4 xl:aspect-h-2 max-w-600 max-h-500 mx-auto"
        }
      >
        <Image
          src={"/images/avatar.jpg"}
          alt={"Photo of the author"}
          layout={"fill"}
          objectFit={"cover"}
          className={"object-avatar"}
        />
      </div>
      <div className={"mt-48 font-bold text-md text-black"}>{t("title")}</div>
      <div className={"flex flex-col md:flex-row mt-32 font-secondary"}>
        <div className={"md:w-1/2"}>
          <p className={"italic"}>{t("description")}</p>
          <div className={"mt-32"}>
            <Button className={"italic"} onClick={handleClick}>
              {t("portfolio.btn.title")}
            </Button>
          </div>
        </div>
        <div className={"flex mt-48 md:mt-0 md:ml-auto xl:ml-300"}>
          <ul className={"text-black font-bold italic"}>
            <li>{t("birthday.title")}</li>
            <li>{t("age.title")}</li>
            <li>{t("email.title")}</li>
            <li>{t("study.title")}</li>
            <li>{t("freelance.title")}</li>
          </ul>
          <ul className={"ml-20"}>
            <li>{t("birthday")}</li>
            <li>{t("age")}</li>
            <li>{t("email")}</li>
            <li>{t("study")}</li>
            <li>{t("freelance")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
