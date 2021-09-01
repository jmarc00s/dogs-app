import React from "react";
import { PHOTOS_GET } from "../../../../api";
import useFetch from "../../../../hooks/useFetch";
import Error from "../../../helpers/Error";
import Loading from "../../../helpers/Loading";

import styles from "./FeedPhotos.module.css";

import FeedPhotosItem from "./components/FeedPhotosItem";

const FeedPhotos = ({ setModalPhoto, user, page, setCanLoad }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total: 6, user });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < 6) {
        setCanLoad(false);
      }
    }

    fetchPhotos();
  }, [request, user, page, setCanLoad]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            setModalPhoto={setModalPhoto}
            photo={photo}
            key={photo.id}
          />
        ))}
      </ul>
    );
  }
  return null;
};

export default FeedPhotos;
