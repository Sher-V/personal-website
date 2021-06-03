import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Button } from "@element/button";
import { WorkExperienceCard } from "@module/work-experience-card";
import { technologies, workExperiences } from "@constant/resume";

interface Props {}

const Resume: React.FC<Props> = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("resume");
  const router = useRouter();

  const handleClick = () => router.push("/contact");

  return (
    <div className={"py-100"}>
      <div className={"flex flex-col justify-between gap-y-36 xl:flex-row"}>
        <div className={"flex-1"}>
          <h3 className={"font-secondary text-lg"}>
            {t("technologies.title")}
          </h3>
        </div>

        <div className={"flex flex-col flex-2 gap-y-24 sm:flex-row"}>
          <div>
            <div className={"text-black font-semibold uppercase"}>
              {t("technologies.comfort.title")}
            </div>
            <ul
              className={"list-disc pl-40 mt-20 font-secondary text-secondary"}
            >
              {technologies.comfort.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className={"text-black font-semibold uppercase"}>
              {t("technologies.experience.title")}
            </div>
            <ul
              className={"list-disc pl-40 mt-20 font-secondary text-secondary"}
            >
              {technologies.experience.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={"mt-100 flex flex-col justify-between gap-y-36 xl:flex-row"}
      >
        <div className={"flex-1"}>
          <h3 className={"font-secondary text-lg"}>{t("experience.title")}</h3>
        </div>
        <div className={"flex-2 flex flex-col gap-y-60"}>
          {workExperiences.map((workExp, i) => (
            <WorkExperienceCard key={i} {...workExp[language]} />
          ))}
        </div>
      </div>

      <div className={"mt-80 flex flex-col gap-y-36 xl:flex-row"}>
        <div className={"flex-1"}>
          <h3 className={"font-secondary text-lg"}>{t("education.title")}</h3>
        </div>
        <div className={"flex-2"}>
          <div className={"text-black font-semibold uppercase flex-2"}>
            Bachelor's degree, Computer Aided Design
          </div>
          <div className={"mt-10"}>
            Bauman Moscow State Technical University, 2017-2021
          </div>
        </div>
      </div>

      <div
        className={
          "flex flex-col items-center mt-150 max-w-screen-md mx-auto text-black text-center"
        }
      >
        <div className={"text-2xl font-semibold"}>{t("hire.title")}</div>
        <div className={"mt-48"}>
          {t("hire.description")}
        </div>
        <div className={"mt-20"}>
          <Button onClick={handleClick} className={"uppercase"}>
            {t("hire.btn.title")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
