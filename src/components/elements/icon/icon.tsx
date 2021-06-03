import React from "react";
import clsx from "clsx";

import icons, { ICONS_ENUM } from "@constant/icons";

interface Props {
  icon: keyof typeof ICONS_ENUM;
  viewBox?: string;
  className?: string;
}

const Icon: React.FC<Props> = ({ icon, viewBox = "0 0 24 24", className }) => (
  <svg
    className={clsx({ "w-20 h-20": !className }, className)}
    viewBox={viewBox}
    focusable="false"
  >
    {icons[icon]}
  </svg>
);

export default Icon;
