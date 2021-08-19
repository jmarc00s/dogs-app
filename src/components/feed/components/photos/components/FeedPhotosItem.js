import React from "react";

import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo }) => {
  console.log(photo);
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title}></img>
      <span className={styles.access}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
