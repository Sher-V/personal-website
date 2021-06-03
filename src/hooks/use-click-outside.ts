import React, { RefObject, useEffect } from "react";

export const useClickOutside = (
  elRef: RefObject<HTMLElement>,
  cb: (ev: React.MouseEvent<HTMLElement>) => void
) => {
  const handleClick = (ev: any) => {
    if (!elRef.current.contains(ev.target as Node)) {
      cb(ev);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
};
