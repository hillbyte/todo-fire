import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import NoteLists from "./NoteLists";

function Notes() {
  const [title, setTitle] = useState("");
  const addNote = () => {
    firebase.firestore().collection("notes").add({
      title,
    });

    setTitle("");
  };

  // const upload = () => {
  //   if (img == null) return;
  //   storage
  //     .ref(`/imgs/${img.name}`)
  //     .put(img)
  //     .on("state_changed", alert("success"), alert);
  // };

  return (
    <div className="App">
      <div className="container my-3 w-75">
        <br />
        <h1 className="text-dark">Add Notes</h1>
        <br />
        <br />
        <div className="card border-success ">
          <div className="card-body">
            <div className="form-group">
              <textarea
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                rows={3}
                placeholder="Write notes.."
                defaultValue={""}
              />
            </div>
            <button
              onClick={addNote}
              className="btn btn-block btn-outline-success"
            >
              Add Note
            </button>
          </div>
        </div>
        <br />
        <hr />
      </div>
    </div>
  );
}
export default Notes;
