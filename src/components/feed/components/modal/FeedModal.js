import React from "react";
import useFetch from "../../../../hooks/useFetch";

import Error from "../../../helpers/Error";
import Loading from "../../../helpers/Loading";

import { PHOTO_GET } from "../../../../api";

import styles from "./FeedModal.module.css";
import PhotoContent from "../../../Photo/PhotoContent";

const FeedModal = ({ photo, clickOutside }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [request, photo]);

  function handleOutsideClick({ target, currentTarget }) {
    if (target === currentTarget) {
      clickOutside();
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
