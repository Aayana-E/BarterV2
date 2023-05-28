import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export default function AllItems({ items }) {
  return (
    <div>
      <h2>Want these items?</h2>
      <p>Items available for trade listed below</p>
      {/* <button onClick={() => getItems()}>Refresh Items</button> */}
      <div>
        {items?.map((item) => (
          <div
            key={item.id}
            style={{
              width: "500px",
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              border: "1px solid grey",
              padding: "2rem",
            }}
          >
            <div>{item.itemName}</div>
            <div style={{ fontStyle: "italic" }}>{item.category}</div>
            <button>More Details</button>
            <button style={{ color: "white", backgroundColor: "green" }}>
              Request Trade
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
