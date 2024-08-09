import React from "react";

export default function Error({ error }) {
  return <span className="text-red-600 text-sm">{error}</span>;
}
