import React from "react";
import UserAvater from "../features/authentication/UserAvater";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <div className="flex items-center justify-between gap-5 sm:px-6 sm:py-4 px-4 py-2  shadow-md">
      <UserAvater />
      <HeaderMenu />
    </div>
  );
}
