import React from "react";
import { GET_STATS } from "../../../api";
import Head from "../../../components/helpers/Head";
import useFetch from "../../../hooks/useFetch";

import Loading from "../../../components/helpers/Loading";
import Error from "../../../components/helpers/Error";
import UserStatsGraphs from "./UserStatsGraphs";

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token");
      const { url, options } = GET_STATS(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
