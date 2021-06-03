import React from "react";

import { Default } from "@layout/default";
import { About } from "@template/about";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutPage: React.FC = () => (
  <Default>
    <About />
  </Default>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "about"])),
  },
});

export default AboutPage;
