import React from "react";
import ItemEntry from "./ItemEntry";

export default function ItemEntryContainer({ pushItem }) {
  return (
    <div>
      <ItemEntry pushItem={pushItem} />
    </div>
  );
}
