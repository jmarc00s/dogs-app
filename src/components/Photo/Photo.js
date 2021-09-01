import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../../api";
import useFetch from "../../hooks/useFetch";
import Error from "../helpers/Error";
import Head from "../helpers/Head";
import Loading from "../helpers/Loading";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getPhoto() {
      const { options, url } = PHOTO_GET(id);
      await request(url, options);
    }
    getPhoto();
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single data={data} />
      </section>
    );
  else return <div>teste</div>;
};

export default Photo;
