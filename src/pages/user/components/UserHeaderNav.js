import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import useMedia from "../../../hooks/useMedia";

import { ReactComponent as MinhasFotos } from "../../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../Assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../Assets/sair.svg";

import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const { pathname } = useLocation();
  const mobile = useMedia("(max-width: 40rem)");

  React.useEffect(() => {
    setMobileMenuOpened(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenuOpened && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenuOpened(!mobileMenuOpened)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenuOpened && styles.navMobileActive
        }`}
      >
        <NavLink exact to="/conta" activeClassName={styles.active}>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName={styles.active}>
          <Adicionar />
          {mobile && "Adicionar foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
