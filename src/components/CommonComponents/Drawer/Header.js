import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function MobileHeader({ setIsOpen }) {
  return (
    <button
      className="rounded px-3 py-2 md:px-7 lg:px-4 lg:py-3"
      onClick={() => setIsOpen(true)}
    >
      <MenuIcon />
    </button>
  );
}
