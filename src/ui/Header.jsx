import React from "react";
import UserAvater from "../features/authentication/UserAvater";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex  justify-between items-center px-7 py-5  ">
      <Logo />
      <div className="flex items-center justify-end gap-5">
        <UserAvater />
        <HeaderMenu />
      </div>
    </div>
  );
}
