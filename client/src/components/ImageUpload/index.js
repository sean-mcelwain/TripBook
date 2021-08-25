import React, { Component } from "react";

import Auth from "../../utils/auth.js";
import storage from "./firebase.js";
import firebase from "firebase/app";
//*function Firebase() {
//  const [image, setImage] = useState("");
//  const upload = () => {
//    if (image == null) return;
//    storage
//      .ref(`/images/${image.name}`)
//      .put(image)
//      .on("state_changed", alert("success"), alert);
//  };

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
    };
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload() {
    const profile = Auth.getProfile().data.username;
    console.log(profile);
    console.log(this.props.tripImage);

    const { image } = this.state;
    console.log(image);
    var storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);
          this.props.setTripImage(downloadURL);
        });
      }
    );
  }

  render() {
    return (
      <div>
        <div>
          <progress value={this.state.progress} max="100" />
        </div>
        <br />
        <br />
        <br />
        <div>
          <div>
            <span></span>
            <input type="file" onChange={this.handleChange} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <button onClick={this.handleUpload.bind(this)}>Upload</button>
        <br />
        <br />
        <img src={this.state.url} alt="Uploaded Images" />
      </div>
    );
  }
}

export default ImageUpload;
