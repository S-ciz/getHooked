import { useRef, useState } from "react";
import "./Postform.css";

//icons
import { FaLink } from "react-icons/fa";

import PostCard from "../PostCard/PostCard";

//comps
import { postFeed } from "./Api";
import { Link } from "react-router-dom";
const Postform = () => {
  let [description, setDescription] = useState("");
  let [imgUrl, setUrl] = useState("");
  let [images, setImg] = useState([]);
  let [Popup, setPopup] = useState("");

  let graphics = useRef();

  function submitPost(e) {
    if (images.length > 0 && description.length > 0) {
      postFeed(images, description);
      alert("Successfully posted");

      setImg([]);
      setDescription("");
    } else {
      alert("Please enter description  and add image");
    }
  }

  function toggleImage(e) {
    setUrl(e.target.value);
  }

  function addImage() {
    if (imgUrl.length > 0) {
      setImg([...images, imgUrl]);
    }

    setUrl("");
  }

  const displayPendingimages = images.map((url) => (
    <PostCard
      removeCard={() => {
        setImg(images.filter((img) => img != url));
      }}
      key={url}
      src={[url]}
    />
  ));

  return (
    <form onSubmit={(e) => e.preventDefault()} className="Postform">
      <section>
        <span className="imgUrl">
          <input
            value={imgUrl}
            onInput={toggleImage}
            placeholder="Enter image url "
          />
          <aside>
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink color="var(--grey_primary)" />
            </a>
          </aside>
        </span>
        <button onClick={addImage} className="addImage">
          + Add image
        </button>
        <footer className="pendingImg">
          {images.length > 0 ? displayPendingimages : " "}
        </footer>
      </section>

      <section>
        <textarea
          placeholder="Description..."
          className="graphic_description"
          value={description}
          onInput={(e) => setDescription(e.target.value)}
        ></textarea>

        <button onClick={submitPost}> Post </button>
      </section>
    </form>
  );
};

export default Postform;
