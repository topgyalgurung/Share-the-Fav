import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [itemName, setItemName] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onNameChanged = (e) => setItemName(e.target.value);
  const onImageChanged = (e) => setImage(e.target.files[0]);
  const onLinkChanged = (e) => setLink(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (itemName && link) {
      // doing this our component does not have to know the structure of the state
      dispatch(postAdded(itemName, link, image, userId));
      setItemName("");
      setImage("");
      setLink("");
      setUserId("");
    }
  };

  const canSave = Boolean(itemName) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a Favorite Item </h2>
      <form>
        <label htmlFor="postTitle">Item Name:</label>
        <input
          type="text"
          id="postTitle"
          name="item-name"
          value={itemName}
          onChange={onNameChanged}
          placeholder="shampoo, sunscream, ..."
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>

        <label htmlFor="postLink">Link:</label>
        <input
          id="postLink"
          type="url"
          name="link"
          value={link}
          onChange={onLinkChanged}
          placeholder="amazon link ..."
        />
        <label htmlFor="postImage">Image:</label>
        <input
          id="postImage"
          type="file"
          name="image"
          accept="image/*"
          value={image}
          onChange={onImageChanged}
        />
        {/* create category drop down filter list to select */}
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
