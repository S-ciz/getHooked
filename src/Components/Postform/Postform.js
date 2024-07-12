import { useRef, useState } from "react";
import "./Postform.css";

//icons
import { FaImage } from "react-icons/fa";
import { postFeed } from "./Api";
const Postform = () => {
  let [images, setImages] = useState([]);
  let [description, setDescription] = useState("");
  let [Popup, setPopup] = useState('')

  function clearPendingImages() {
    let elementGraphics = graphics.current;
    elementGraphics.innerHTML = "";
  }
  function submitPost(e) {
    e.preventDefault();

    if(images.length > 0)
    {
      postFeed(images, description);
      //clear fields
      setImages([]);
      clearPendingImages();
      setDescription("");
      setPopup("Successfully Posted, reload page...")
    }
    else 
    {
      setPopup("Please select an image")
    }

   
    
  }

  let graphics = useRef();

  function createIMageUrl(file) {
    return URL.createObjectURL(file);
  }
  function displayPendingImages(file) {
    let elementGraphics = graphics.current;
    let newImage = document.createElement("img");
    newImage.className = "pending_img";
    newImage.src = createIMageUrl(file);
    elementGraphics.append(newImage);
  }

  function storePendingImages(imgFile) {
    setImages((images = [...images, imgFile]));
  }

  function listenForFileSelection(e) {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      storePendingImages(files[i]);
      displayPendingImages(files[i]);
    }
  }
  return (
    <form onSubmit={submitPost} className="Postform">
      <div ref={graphics} className="graphics">
        {" "}
      </div>
      <span className="file_select">
       <FaImage size="20" color="var(--grey_secondary)" />
        <input
          multiple={true}
          onChange={listenForFileSelection}
          type="file"
          name="image"
          accept="image/*"
          required
        />
      </span>

     <div className="alert"> { Popup.length > 0 ? Popup : '' }</div>

      <textarea
        placeholder="Description..."
        className="graphic_description"
        value={description}
        onInput={(e) => setDescription(e.target.value)}
      ></textarea>

      <button> Post </button>
    </form>
  );
};

export default Postform;
