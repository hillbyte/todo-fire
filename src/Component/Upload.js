import React from "react";
import { useState } from "react";

import { storage } from "../firebase";
const Upload = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (e) => {
    const reader = new FileReader();
    let file = e.target.files[0]; // get the supplied file
    // if there is a file, set image to that file
    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          console.log(file);
          setImage(file);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      // if there is no file, set image back to null
    } else {
      setImage(null);
    }
  };
  const uploadToFirebase = () => {
    //1.
    if (image) {
      //2.
      const storageRef = storage.ref();
      //3.
      const imageRef = storageRef.child(image.name);
      //4.
      imageRef
        .put(image)
        //5.
        .then(() => {
          alert("Image uploaded successfully to Firebase.");
        });
    } else {
      alert("Please upload an image first.");
    }
  };

  return (
    <div>
      <input
        type="file"
        className="form-control"
        onChange={(e) => {
          onImageChange(e);
        }}
      />
      <button
        onClick={(e) => uploadToFirebase(e)}
        className="btn-sm btn-info my-4"
      >
        Upload
      </button>
    </div>
  );
};

export default Upload;
