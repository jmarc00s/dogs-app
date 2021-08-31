import React from "react";
import FeedModal from "./components/modal/FeedModal";
import FeedPhotos from "./components/photos/FeedPhotos";
import PropTypes from "prop-types";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [canLoad, setCanLoad] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (!canLoad) {
        return;
      }

      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;

      if (scroll > height * 0.75 && !wait) {
        setPages((pages) => [...pages, pages.length + 1]);
        wait = true;
        setTimeout(() => {
          wait = false;
        }, 500);
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [canLoad]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal
          photo={modalPhoto}
          clickOutside={() => setModalPhoto(null)}
        />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          setModalPhoto={setModalPhoto}
          page={page}
          setCanLoad={setCanLoad}
        />
      ))}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
