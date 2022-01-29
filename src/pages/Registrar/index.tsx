import {Header, Footer} from "components";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiUser } from "Services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Registrar = () =>{

    const { register, handleSubmit } = useForm();

    const handleRegister = useCallback(

      
        async (data) => {
          
          try {
            await apiUser.register(data);
            toast.success("Cadastro realizado com sucesso!");
          } catch (error) {
            const err = error as AxiosError;
            const msg = err.response?.data.errors.map((i: any) => i.message);
            toast.error(`Falha ao cadastrar! ${msg.join(" ")}`);
          } 
        },
        [],
      );
    
    return <> 
        <Header/>
        
        <S.Formulario>
            <form method="POST" onSubmit={handleSubmit(handleRegister)}>
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
                Enviar
              </button>
              <Link to="/Login"> Ja é cadastrado? Logar</Link>
            </form>
          </S.Formulario>
        <Footer/>
        </>;
};
export default Registrar;