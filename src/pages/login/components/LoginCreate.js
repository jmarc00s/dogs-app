import React from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Error from "../../../components/helpers/Error";

import { USER_POST } from "../../../api";

import { UserContext } from "../../../context/UserContext";

import useFetch from "../../../hooks/useFetch";
import useForm from "../../../hooks/useForm";
import Head from "../../../components/helpers/Head";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const response = await request(url, options);
  }

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input {...username} label="Usuário" type="text" name="username" />
        <Input {...email} label="Email" type="email" name="email" />
        <Input {...password} label="Senha" type="password" name="password" />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button type="submit">Cadastrar</Button>
        )}
        {error && <Error error={error} />}
      </form>
    </section>
  );
};

export default LoginCreate;
