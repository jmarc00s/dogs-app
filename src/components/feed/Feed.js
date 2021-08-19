import React from "react";
import FeedModal from "./components/modal/FeedModal";
import FeedPhotos from "./components/photos/FeedPhotos";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
