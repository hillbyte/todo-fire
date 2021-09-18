import React, { useState, useEffect } from "react";
import firebase from "../firebase";

function useLists() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((snapshot) => {
        const lists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLists(lists);
      });
  }, []);

  return lists;
}
const handleOnDelete = (id) => {
  firebase.firestore().collection("notes").doc(id).delete();
};

const NoteLists = () => {
  const lists = useLists();
  return (
    <div className="">
      <h1 className="text-dark">Desk Notes</h1>
      {lists.map((list) => {
        return (
          <ul className="list-group my-2">
            <li className="list-group-item text-uppercase list-group-item-success my-2 d-flex justify-content-between align-items-center">
              {list.title} <br />
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleOnDelete(list.id)}
              >
                Remove
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default NoteLists;
