import React from "react";
import useForm from "../../../hooks/useForm";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";

import { UserContext } from "../../../context/UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();

    if (!username.validate() || !password.validate()) return;

    userLogin(username.value, password.value);
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input {...username} label="Usuário" type="text" name="username" />
        <Input {...password} label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
