import React, { useState } from "react";
import _ from "lodash";
import { useStore } from "effector-react";
import { useTranslation } from "next-i18next";

import { $modalState } from "@store/modal";
import { PortfolioCard } from "@module/portfolio-card";
import { PortfolioWorkModal } from "@module/portfolio-work-modal";
import { portfolioWorks, ProjectTypes } from "@constant/portfolio";
import clsx from "clsx";

const Portfolio: React.FC = () => {
  const { t } = useTranslation("portfolio");
  const modalType = useStore($modalState);
  const [projectType, setProjectType] = useState<string>(null);

  const handleClick = (projType: string) => () => {
    setProjectType(projType);
  };

  return (
    <div>
      {portfolioWorks[modalType] && <PortfolioWorkModal />}
      <div className={"py-100"}>
        <div
          className={"flex flex-col justify-between xl:flex-row xl:items-end"}
        >
          <div>
            <div>
              <span
                className={
                  "bg-gray-dark text-gray-dark inline-block py-4 px-10 uppercase font-semibold text-sm mb-10"
                }
              >
                {t("topic.title")}
              </span>
            </div>
            <div>
              <h1 className={"font-extrabold text-xl text-black"}>
                {t("title")}
              </h1>
            </div>
          </div>
          <div className={"mt-20 xl:mt-0"}>
            <ul>
              <li
                onClick={handleClick(null)}
                className={clsx("inline-block mr-10 md:mr-32 cursor-pointer", {
                  "tracking-lg text-black font-medium": projectType === null,
                })}
              >
                {t("filters.all")}
              </li>
              <li
                onClick={handleClick(ProjectTypes.FREELANCE)}
                className={clsx("inline-block mr-10 md:mr-32 cursor-pointer", {
                  "tracking-lg text-black font-medium":
                    projectType === ProjectTypes.FREELANCE,
                })}
              >
                {t("filters.commercial.projects")}
              </li>
              <li
                onClick={handleClick(ProjectTypes.PET)}
                className={clsx("inline-block cursor-pointer", {
                  "tracking-lg text-black font-medium":
                    projectType === ProjectTypes.PET,
                })}
              >
                {t("filters.pet.projects")}
              </li>
            </ul>
          </div>
        </div>

        <div
          className={
            "flex mt-80 flex-wrap gap-12 flex-col gap-36 md:flex-row justify-between"
          }
        >
          {_(portfolioWorks)
            .filter((work) => (projectType ? work.type === projectType : true))
            .map((work) => (
              <PortfolioCard
                id={work.id}
                key={work.id}
                src={_.head(work.images)}
              />
            ))
            .value()}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
