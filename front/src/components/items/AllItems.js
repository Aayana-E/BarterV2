import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export default function AllItems() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const itemSnapshot = await getDocs(collection(db, "items"));

    const data = [];

    itemSnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    console.log(data);
    setItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h2>Want these items?</h2>
      <p>Items available for trade listed below</p>
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
            <div>{item.category}</div>

            <button style={{ color: "white", backgroundColor: "green" }}>
              Request Trade
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
