import React, { useEffect } from "react";
import { useStore } from "effector-react";

import { LeftPart } from "@module/left-part";
import { MobileHeader } from "@module/mobile-header";
import { RightPartContainer } from "@module/right-part-container";
import { $modalState } from "@store/modal";
import { MobileMenu } from "@module/mobile-menu";

const Default: React.FC = ({ children }) => {
  const modalType = useStore($modalState);

  useEffect(() => {
    const className = "overflow-hidden";

    if (!modalType) {
      document.body.classList.remove(className);
    } else {
      document.body.classList.add(className);
    }
  }, [modalType]);

  return (
    <div className={"min-h-screen"}>
      <LeftPart />
      <MobileHeader />
      {modalType === "menu" && <MobileMenu />}
      <RightPartContainer>{children}</RightPartContainer>
    </div>
  );
};

export default Default;
