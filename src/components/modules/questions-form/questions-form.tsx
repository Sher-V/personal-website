import { Form, Formik } from "formik";
import React from "react";
import { useTranslation } from "next-i18next";
import { FormikConfig, FormikHelpers } from "formik/dist/types";

import { Input } from "@element/input";
import { Button } from "@element/button";
import { initialValues } from "./constants";
import { QuestionsFormValues } from "@type";
import * as Yup from "yup";

const getSchema = (t) =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(2, t("form.error.firstName.short"))
      .max(50, t("form.error.firstName.long"))
      .required(t("form.error.required")),
    lastName: Yup.string()
      .min(2, t("form.error.lastName.short"))
      .max(50, t("form.error.lastName.long"))
      .required(t("form.error.required")),
    email: Yup.string()
      .email(t("form.error.invalid.email"))
      .required(t("form.error.required")),
    description: Yup.string().max(500, t("form.error.description.long")),
  });

interface Props {
  onSubmit: (
    values: QuestionsFormValues,
    helpers: FormikHelpers<QuestionsFormValues>
  ) => Promise<FormikConfig<QuestionsFormValues>["onSubmit"]>;
}

const QuestionsForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation("contact");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getSchema(t)}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <fieldset className={"mt-20"}>
            <legend>{t("form.full.name")}</legend>
            <div className="text-xs text-gray">
              {t("form.full.name.caption")}
            </div>
            <div className={"flex justify-between mt-10"}>
              <div className={"flex-grow"}>
                <Input label={t("form.first.name")} name={"firstName"} />
              </div>
              <div className={"ml-4 flex-grow"}>
                <Input label={t("form.last.name")} name={"lastName"} />
              </div>
            </div>
          </fieldset>
          <div className={"w-full mt-20"}>
            <label className={"block"}>{t("form.email")}</label>
            <Input type={"email"} name={"email"} />
          </div>
          <div className={"mt-20"}>
            <label>{t("form.questions.description.title")}</label>
            <div className="text-sm text-gray tracking-main">
              {t("form.questions.description.caption")}
            </div>
            <Input name={"description"} multiline />
          </div>
          <div className={"flex justify-center mt-32"}>
            <Button
              disabled={isSubmitting}
              isLoading={isSubmitting}
              type={"submit"}
              className={"uppercase"}
            >
              {t("form.questions.submit.title")}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default QuestionsForm;
