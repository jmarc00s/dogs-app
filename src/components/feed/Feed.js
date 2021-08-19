import React from "react";
import FeedModal from "./components/FeedModal";
import FeedPhotos from "./components/photos/FeedPhotos";

const Feed = () => {
  return (
    <div>
      <FeedModal />
      <FeedPhotos />
    </div>
  );
};

export default Feed;
