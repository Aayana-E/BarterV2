import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import ItemEntryContainer from "./ItemEntryContainer";
import AllItems from "./AllItems";
import LoggedIn from '../LoggedIn';

export default function AllAndEntry() {
  const [items, setItems] = useState([]);
  const pushItem = (i) => {
    setItems([...items, i]);
  };

  const getItems = async () => {
    const itemSnapshot = await getDocs(collection(db, "items"));
    const data = [];
    itemSnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "200px",
      }}
    >
      <ItemEntryContainer pushItem={pushItem} />
      <AllItems items={items} />
    </div>
  );
}