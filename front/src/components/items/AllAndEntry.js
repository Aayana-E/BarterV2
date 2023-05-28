import React from "react";
import ItemEntryContainer from "./ItemEntryContainer";
import AllItems from "./AllItems";

export default function AllAndEntry() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ItemEntryContainer />
      <AllItems />
    </div>
  );
}
