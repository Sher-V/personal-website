import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Contact } from "@template/contact";
import { Default } from "@layout/default";

const ContactPage: React.FC = () => (
  <Default>
    <Contact />
  </Default>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "contact"])),
  },
});

export default ContactPage;
