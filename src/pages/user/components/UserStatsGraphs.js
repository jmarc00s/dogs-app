import React from "react";
import styles from "./UserStatsGraphs.module.css";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const acessos = data.map(({ acessos }) => Number(acessos));
    const totalAcessos = acessos.reduce((acc, curr) => acc + curr, 0);
    setTotal(totalAcessos);
  }, [data]);

  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
