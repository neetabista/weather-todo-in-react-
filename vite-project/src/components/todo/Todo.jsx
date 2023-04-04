import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AddIcon, EditIcon, DeleteIcon } from "./Icons";

// get the localStorage data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodoList");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  // add the item funtion
  const addItem = () => {
    if (!inputData) {
      alert("PLZ fill the Item");
    } else if (inputData && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputData };
          }
          return curElem;
        })
      );

      setInputData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };
  // edit the item
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  // how to delete item section
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  // remove All items
  const removeAll = () => {
    return setItems([]);
  };

  // adding localStorage
  useEffect(() => {
    localStorage.setItem("mytodoList", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <section>
        <div className="wrapper">
          <div className="todo-section">
            <h1>Add Your List Here</h1>
            <div className="add-item">
              <input
                type="text"
                placeholder="✍ Add Item"
                className="form-control"
                value={inputData}
                onChange={(event) => setInputData(event.target.value)}
              />

              {toggleButton ? (
                <span className="btn" onClick={addItem}>
                  <EditIcon />
                </span>
              ) : (
                <span className="btn" onClick={addItem}>
                  <AddIcon />
                </span>
              )}
            </div>

            {/* show item list  */}
            <div className="showItem">
              {items.map((curElem, index) => {
                return (
                  <div className="eachItem" key={index}>
                    <p>{curElem.name}</p>
                    <span className="btn">
                      <span
                        className="edit-btn"
                        onClick={() => editItem(curElem.id)}
                      >
                        <EditIcon />
                      </span>
                      <span
                        className="delete-btn"
                        onClick={() => deleteItem(curElem.id)}
                      >
                        <DeleteIcon />
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="remove-btn" onClick={removeAll}>
              Remove All
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Todo;
