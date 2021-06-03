import React from "react";
import { Trans, useTranslation } from "next-i18next";
import { useStore } from "effector-react";

import { $modalState } from "@store/modal";
import { FormTypes } from "@constant/forms";
import { ContactModals } from "@module/contact-modals";
import { ContactButton } from "@module/contact-button";

interface Props {}

const Contact: React.FC<Props> = () => {
  const { t } = useTranslation("contact");
  const modalType = useStore($modalState);

  return (
    <div>
      {FormTypes[modalType] && <ContactModals />}
      <div className={"py-100"}>
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
          <h1 className={"font-extrabold text-xl text-black"}>{t("title")}</h1>
        </div>
        <div className={"flex flex-col mt-48 flex-wrap gap-36 sm:flex-row"}>
          <ContactButton
            formType={FormTypes.HIRE}
            title={t("hire.title")}
            description={t("hire.description")}
            btnTitle={t("hire.button.title")}
          />
          <ContactButton
            formType={FormTypes.QUESTION}
            title={t("questions.title")}
            description={t("questions.description")}
            btnTitle={t("questions.button.title")}
          />
          <div
            className={"border-orange border-2 text-center p-40 w-full py-40"}
          >
            <h3 className={"text-black font-semibold text-lg mb-20"}>
              {t("direct.contact.title")}
            </h3>
            <p className={"text-md"}>
              <Trans
                i18nKey={"direct.contact.description"}
                t={t}
                components={[
                  <a
                    className={"underline text-blue-500"}
                    href="https://t.me/shvadik123"
                    target="_blank"
                  >
                    {t("direct.contact.telegram")}
                  </a>,
                ]}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
