import React, { useEffect, useState } from "react";
import { useStore } from "effector-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import { ModalWrapper } from "@element/modal-wrapper";
import { $modalState } from "@store/modal";
import { portfolioWorks } from "@constant/portfolio";
import { useTranslation } from "next-i18next";

interface Props {}

const cacheImage = (activeIndex, src) =>
  new Promise<void>((resolve, reject) => {
    const img = new Image();

    img.src = src;

    img.onload = () => resolve();
    img.onerror = () => reject();
  });

const PortfolioWorkModal: React.FC<Props> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const {
    t,
    i18n: { language },
  } = useTranslation("portfolio");
  const modalType = useStore($modalState);
  const work = portfolioWorks[modalType];

  const isDecrDisabled = activeIndex <= 0;
  const isIncrDisabled = activeIndex >= work?.images.length - 1;

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      if (!isDecrDisabled) {
        await cacheImage(activeIndex - 1, work?.images[activeIndex - 1]);
      }

      if (!isIncrDisabled) {
        await cacheImage(activeIndex + 1, work?.images[activeIndex + 1]);
      }

      setIsLoading(false);
    })();
  }, [activeIndex]);

  const incr = () => setActiveIndex(activeIndex + 1);

  const decr = () => setActiveIndex(activeIndex - 1);

  return (
    <ModalWrapper className={"md:max-w-4/5"}>
      <h1 className={"text-lg relative mb-20"}>
        {work[language].title}
        <div className={"absolute w-full left-0 h-2 -bottom-2.5 bg-black"} />
      </h1>
      <div className={"flex items-center"}>
        <button
          disabled={isDecrDisabled || isLoading}
          onClick={decr}
          className={"w-30 h-30"}
        >
          <ChevronLeftIcon
            className={clsx("w-full h-full stroke-current text-black", {
              "text-gray-light": isDecrDisabled || isLoading,
            })}
          />
        </button>
        <div className={"aspect-w-10 aspect-h-6 w-full"}>
          <AnimatePresence>
            <motion.img
              key={work?.images[activeIndex]}
              className={"object-contain"}
              src={work?.images[activeIndex]}
              transition={{
                opacity: { duration: 0.4 },
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              alt={"Work image"}
            />
          </AnimatePresence>
        </div>
        <button
          disabled={isIncrDisabled || isLoading}
          onClick={incr}
          className={"w-30 h-30"}
        >
          <ChevronRightIcon
            className={clsx("w-full h-full stroke-current text-black", {
              "text-gray-light": isIncrDisabled || isLoading,
            })}
          />
        </button>
      </div>
      <div className={"font-semibold font-secondary text-secondary"}>
        {t("project.description")}
      </div>
      <div className={"text-gray mt-5 mb-20"}>{work[language].description}</div>
      <div className={"font-semibold font-secondary text-secondary"}>
        {t("project.tech")}
      </div>
      <div className={"mt-10 flex flex-wrap gap-5"}>
        {work?.technologies.map((technology, i) => (
          <span
            className={"bg-gray-dark rounded-md inline-block px-10 py-4"}
            key={i}
          >
            {technology}
          </span>
        ))}
      </div>
    </ModalWrapper>
  );
};

export default PortfolioWorkModal;
