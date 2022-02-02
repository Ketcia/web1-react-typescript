import React from "react"
import {Header, Footer} from "components";
import { useCallback,} from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";


import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { useAuth } from "hooks/auth";

const Login = () =>{

    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const { signIn } = useAuth();

    const handleLogin = useCallback(
      async (data) => {
        try {
          await signIn(data);
          toast.success("Login realizado com sucesso!");
          history.push("/");
        } catch (error) {
          console.log(error)
          const err = error as AxiosError;
          const msg = err.response?.data;
          toast.error(`Falha ao fazer o login! ${msg}`);
        }
      },
      [signIn, history]
    );
    
    return <> 
        <Header/>
        
        <S.Formulario>
            <form method="POST" onSubmit={handleSubmit(handleLogin)}>
              <div>
                <input
                  type="email"
                  placeholder="e-mail"
                  required
                  {...register("email")}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="senha"
                  required
                  {...register("password")}
                />
              </div>
              <button type="submit">
                Entrar
              </button>
              <Link to="/Registrar"> Criar Conta</Link>
            </form>
          </S.Formulario>
        <Footer/>
        </>;
};
export default Login;