import React, { useState, useEffect } from "react";
import storage from "./firebase.js";
import Auth from "../../utils/auth.js";

function AllImages() {
  const [allImages, setImages] = useState([]);
  const profile = Auth.getProfile().data.username;

  useEffect(() => {
    getFromFirebase();
  });

  const getFromFirebase = () => {
    let storageRef = storage.ref(`images/${profile}`);
    console.log(allImages);
    storageRef
      .listAll()
      .then(function (res) {
        res.items.forEach((imageRef) => {
          imageRef.getDownloadURL().then((url) => {
            if (allImages.indexOf(url) === -1) {
              setImages((allImages) => [...allImages, url]);
            }
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteFromFirebase = (url) => {
    let pictureRef = storage.refFromURL(url);
    pictureRef
      .delete()
      .then(() => {
        setImages(allImages.filter((image) => image !== url));
        alert("Picture is successfully deleted!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      (
      <header className="App-header">
        {/* <button onClick={() => getFromFirebase()}>
          Get Images from Firebase
        </button> */}

        <div id="photos">
          {allImages.map((image) => {
            return (
              <div key={image} className="image">
                <img className="travelImg" src={image} alt="" />
                <button onClick={() => deleteFromFirebase(image)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </header>
      )
    </div>
  );
}

export default AllImages;
