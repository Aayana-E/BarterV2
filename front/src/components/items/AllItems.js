import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export default function AllItems({ items }) {
  const messageButton = {
    border: "none",
    outline: "none",
    color: "whitesmoke",
    backgroundColor: "#609966",
    fontFamily: "san-serif",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "500",
    borderRadius: "5px",
    transition: "all ease 0.1s",
    boxShadow: `0px 5px 0px 0px #9DC08B`,
    width: `120px`,
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",
  };
  const detailsButton = {
    border: "none",
    outline: "none",
    backgroundColor: "whitesmoke",
    fontFamily: "san-serif",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "500",
    color: "black",
    borderRadius: "5px",
    transition: "all ease 0.1s",
    boxShadow: `0px 5px 0px 0px #9DC08B`,
    width: `120px`,
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",
  };
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
              width: "600px",
              display: "flex",
              justifyContent: "right",
              gap: "2rem",
              border: "1px solid grey",
              padding: "2rem",
              borderRadius: "10px",
              margin: "1rem",
            }}
          >
            <div>{item.itemName}</div>
            <div style={{ fontStyle: "italic" }}>{item.category}</div>
            <button style={detailsButton}>More Details</button>
            <button style={messageButton}>Request Trade</button>
          </div>
        ))}
      </div>
    </div>
  );
}
