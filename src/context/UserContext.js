import React from "react";
import { useHistory } from "react-router";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const history = useHistory();

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      setError(null);

      if (token) {
        try {
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) {
            throw new Error("Token inválido");
          }
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }

    autoLogin();
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);

    const user = await response.json();

    setData(user);

    setIsAuthenticated(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });

      const response = await fetch(url, options);
      const responseJson = await response.json();

      if (response.ok) {
        const { token } = responseJson;
        window.localStorage.setItem("token", token);
        await getUser(token);
        history.push("/conta");
      } else {
        throw new Error("Não foi possível realizar o login.");
      }
    } catch (err) {
      setError(err.message);
      history.push("/login");
    } finally {
      setLoading(false);
    }
  }

  function userLogout() {
    setData(null);
    setIsAuthenticated(false);
    setLoading(false);
    setError(null);
    window.localStorage.removeItem("token");
  }

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userData: data,
        userLogout,
        error,
        loading,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
