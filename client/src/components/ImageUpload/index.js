import React, { Component } from "react";
import storage from "./firebase.js";

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

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
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
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url });
          });
      }
    );
  };

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
        <button onClick={this.handleUpload}>Upload</button>
        <br />
        <br />
        <img src={this.state.url} alt="Uploaded Images" />
      </div>
    );
  }
}

export default ImageUpload;
