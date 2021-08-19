import React from "react";
import { PHOTOS_GET } from "../../../../api";
import useFetch from "../../../../hooks/useFetch";
import Error from "../../../helpers/Error";
import Loading from "../../../helpers/Loading";

import styles from "./FeedPhotos.module.css";

import FeedPhotosItem from "./components/FeedPhotosItem";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      await request(url, options);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem photo={photo} key={photo.id} />
        ))}
      </ul>
    );
  }
  return null;
};

export default FeedPhotos;
