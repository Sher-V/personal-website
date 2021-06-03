import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Portfolio } from "@template/portfolio";
import { Default } from "@layout/default";

const PortfolioPage: React.FC = () => (
  <Default>
    <Portfolio />
  </Default>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "portfolio"])),
  },
});

export default PortfolioPage;
