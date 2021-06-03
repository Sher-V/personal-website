import React, { useState } from "react";
import { FormTypes } from "@constant/forms";
import { HireForm } from "../hire-form";
import { QuestionsForm } from "../questions-form";
import { useStore } from "effector-react";
import { $modalState } from "@store/modal";
import clsx from "clsx";
import { ModalWrapper } from "@element/modal-wrapper";
import { useTranslation } from "next-i18next";
import { FormikConfig, FormikHelpers } from "formik/dist/types";
import { sendForm } from "@api/hire-form";
import { FormValuesType } from "@type";

interface Props {}

const ContactModals: React.FC<Props> = () => {
  const { t } = useTranslation("contact");

  const modalType = useStore($modalState);
  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
  } | null>();

  const onSubmit = async (
    values: FormValuesType,
    { setSubmitting }: FormikHelpers<FormValuesType>
  ): Promise<FormikConfig<FormValuesType>["onSubmit"]> => {
    setSubmitting(true);

    try {
      const res = await sendForm(values);

      setSubmitting(false);
      setResponse(res);
    } catch (e) {
      setResponse({
        success: false,
        message: t("form.error"),
      });
    }

    return;
  };

  return (
    <ModalWrapper>
      {response ? (
        <div className={clsx({ "text-red": !response?.success })}>
          {response?.message || t("form.default.error")}
        </div>
      ) : (
        {
          [FormTypes.HIRE]: <HireForm onSubmit={onSubmit} />,
          [FormTypes.QUESTION]: <QuestionsForm onSubmit={onSubmit} />,
        }[modalType]
      )}
    </ModalWrapper>
  );
};

export default ContactModals;
