import React from "react";

export default function UserAvater() {
  return (
    <div className="text-gray-50 flex gap-5 items-center text-2xl font-meduim">
      <img
        className="block w-16 object-cover object-center rounded-full outline-2 outline-gray-100 outline "
        src="https://placehold.co/400"
      />
      <spn className="">Name</spn>
    </div>
  );
}
