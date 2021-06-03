import React from "react";
import { Form, Formik } from "formik";
import { useTranslation } from "next-i18next";
import * as Yup from "yup";

import { initialValues } from "./constants";
import { Input } from "@element/input";
import { Checkbox } from "@element/checkbox";
import { Button } from "@element/button";
import { FormikConfig, FormikHelpers } from "formik/dist/types";
import { HireFormValues } from "@type";

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
    development_from_scratch_request: Yup.boolean(),
    feature_request: Yup.boolean(),
    conversation_request: Yup.boolean(),
  });

interface Props {
  onSubmit: (
    values: HireFormValues,
    helpers: FormikHelpers<HireFormValues>
  ) => Promise<FormikConfig<HireFormValues>["onSubmit"]>;
}

const HireForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation("contact");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getSchema(t)}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <h3
            className={
              "uppercase font-medium border-l-4 pl-10 border-orange tracking-md"
            }
          >
            {t("form.hire.contact.details.title")}
          </h3>
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
          <h3
            className={
              "uppercase font-medium border-l-4 pl-10 border-orange tracking-md mt-20"
            }
          >
            {t("form.hire.project.details.title")}
          </h3>
          <fieldset className={"mt-20"}>
            <legend>{t("form.hire.project.details.services.title")}</legend>
            <div>
              <Checkbox
                label={t("form.hire.project.details.services.from.scratch")}
                name={"development_from_scratch_request"}
              />
            </div>
            <div>
              <Checkbox
                label={t("form.hire.project.details.services.feature")}
                name={"feature_request"}
              />
            </div>
            <div>
              <Checkbox
                label={t("form.hire.project.details.services.conversation")}
                name={"conversation_request"}
              />
            </div>
          </fieldset>
          <div className={"mt-20"}>
            <label>{t("form.hire.project.details.description.title")}</label>
            <div className="text-sm text-gray tracking-main">
              {t("form.hire.project.details.description.caption")}
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
              {t("form.hire.submit.title")}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default HireForm;
