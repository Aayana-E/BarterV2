import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export default function ItemEntry() {
  const [success, setSuccess] = useState(false);
  const formStyles = {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    alignItems: "center",
  };
  const inputAndLabelStyles = {
    padding: "1rem",
    backgroundColor: "orange",
  };
  const inputLabelStyles = {
    padding: 0,
    margin: 0,
  };
  const buttonStyles = {
    backgroundColor: "green",
    color: "white",
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const item = {
      itemName,
      category: selectedCategory,
      condition,
      size,
      description,
      expire,
    };
    addDoc(collection(db, "items"), item);

    setSuccess(true);
  };

  const categories = ["Clothes", "Food", "Other"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [itemName, setItemName] = useState("");
  const [condition, setCondition] = useState("New");
  const [size, setSize] = useState("S");
  const [description, setDescription] = useState("");
  const [expire, setExpire] = useState("");

  return (
    <div style={{ width: "350px" }}>
      <h2>Add an item</h2>
      Item Entry
      <form style={formStyles} onSubmit={submitHandler}>
        <div style={inputAndLabelStyles}>
          <h3 style={inputLabelStyles}>Item Name</h3>
          <input
            placeholder="item name"
            onChange={(event) => setItemName(event.target.value)}
            value={itemName}
          />
        </div>
        <div style={inputAndLabelStyles}>
          <h3 style={inputLabelStyles}>Category</h3>
          <select onChange={(event) => setSelectedCategory(event.target.value)}>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Inputs for clothes */}
        {selectedCategory === "Clothes" && (
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div>
              <h3 style={inputLabelStyles}>Size:</h3>
              <select
                name="clothing size"
                id="size"
                onChange={(event) => setSize(event.target.value)}
              >
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>

            <div>
              <h3 style={inputLabelStyles}>Condition</h3>
              <select
                name="clothing condition"
                id="condition"
                onChange={(event) => setCondition(event.target.value)}
              >
                <option>New</option>
                <option>Like New</option>
                <option>Used</option>
              </select>
            </div>
          </div>
        )}

        {/* Inputs for foods */}
        {selectedCategory === "Food" && (
          <div style={{ display: "flex" }}>
            <h3 style={inputLabelStyles}>Expiration date:</h3>
            <input
              placeholder="MM/DD/YYYY"
              type="text"
              onChange={(event) => setExpire(event.target.value)}
            />
          </div>
        )}
        <h3 style={inputLabelStyles}>Description</h3>
        <textarea
          rows={"5"}
          placeholder="Describe the item..."
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit" style={buttonStyles}>
          submit
        </button>
      </form>
      {success && <div>Item added!</div>}
    </div>
  );
}
