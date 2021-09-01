import React from "react";

import Error from "../../../components/helpers/Error";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";

import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";

import { PASSWORD_LOST } from "../../../api";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      await request(url, options);
    }
  }

  if (error) return <Error error={error} />;
  else
    return (
      <section>
        <h1 className="title">Perdeu a senha?</h1>
        {data ? (
          <p style={{ color: "#4c1" }}>{data}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input label="Email/Usuário" type="text" name="login" {...login} />
            {loading ? (
              <Button disabled> Enviando...</Button>
            ) : (
              <Button> Enviar email</Button>
            )}
          </form>
        )}
      </section>
    );
};

export default LoginPasswordLost;
