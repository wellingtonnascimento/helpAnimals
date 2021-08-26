import React, { useEffect, useState } from "react";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Error from "../Helper/Error";
import { PASSWORD_RESET } from "../../service/api";
import { useNavigate } from "react-router-dom";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm();
  const { erro, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { reponse } = await request(url, options);
      if (reponse.ok) navigate("./");
    }
  }

  return (
    <div>
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
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
      <Error error={erro} />
    </div>
  );
};

export default LoginPasswordReset;
