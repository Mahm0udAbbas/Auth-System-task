import React from "react";
import UserAvater from "../features/authentication/UserAvater";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <div className="flex items-center justify-between gap-5 px-6 py-4  shadow-md">
      <UserAvater />
      <HeaderMenu />
    </div>
  );
}
