import React, { useState, useEffect } from "react";
import { storage } from "../firebase";

const Photos = () => {
  const [allImages, setImages] = useState([]);
  let storageRef = storage.ref();
  storageRef
    .listAll()
    .then(function (res) {
      res.items.forEach((imageRef) => {
        imageRef.getDownloadURL().then((url) => {
          console.log(url);
          setImages((allImages) => [...allImages, url]);
        });
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  const deleteFromFirebase = (url) => {
    let pictureRef = storage.refFromURL(url);
    pictureRef
      .delete()
      .then(() => {
        setImages(allImages.filter((image) => image !== url));
        alert("Picture is deleted successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div id="photos"></div>;
};

export default Photos;
