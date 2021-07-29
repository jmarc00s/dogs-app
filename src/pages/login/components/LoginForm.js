import React from "react";
import useForm from "../../../hooks/useForm";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Error from "../../../components/helpers/Error";

import styles from "./LoginForm.module.css";

import { UserContext } from "../../../context/UserContext";
import { Link, useHistory } from "react-router-dom";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const history = useHistory();

  const { userLogin, error, loading } = React.useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();

    if (!username.validate() || !password.validate()) return;

    userLogin(username.value, password.value);
  }

  function handleCadastroClick() {
    history.push("/login/criar");
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input {...username} label="Usuário" type="text" name="username" />
        <Input {...password} label="Senha" type="password" name="password" />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha ?{" "}
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Button onClick={handleCadastroClick}>Cadastro</Button>
      </div>
    </section>
  );
};

export default LoginForm;
