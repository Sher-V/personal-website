import React from "react";

import { Default } from "@layout/default";
import { Home } from "@template/home";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage: React.FC = () => (
  <Default>
    <Home />
  </Default>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default HomePage;
