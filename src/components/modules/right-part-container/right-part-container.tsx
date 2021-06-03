import React from "react";
import clsx from "clsx";

interface Props {
  className?: string;
}

const RightPartContainer: React.FC<Props> = ({ children, className }) => (
  <div
    className={clsx("bg-gray-light px-20 min-h-screen mx-auto md:px-80 lg:ml-300", {
      [className]: !!className,
    })}
  >
    {children}
  </div>
);

export default RightPartContainer;
