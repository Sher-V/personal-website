import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Default } from "@layout/default";
import { Resume } from "@template/resume";

const ResumePage: React.FC = () => (
  <Default>
    <Resume />
  </Default>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "resume"])),
  },
});

export default ResumePage;
