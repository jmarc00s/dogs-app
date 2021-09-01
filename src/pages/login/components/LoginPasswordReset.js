import React from "react";
import { useHistory } from "react-router-dom";

import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import Error from "../../../components/helpers/Error";

import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { PASSWORD_RESET } from "../../../api";

const LoginPasswordReset = () => {
  const history = useHistory();
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm("password");
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        history.push("/login");
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};

export default LoginPasswordReset;
