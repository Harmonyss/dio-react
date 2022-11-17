import React from "react"
import { MdEmail, MdLock} from "react-icons/md"
import { Button } from "../../Componentes/Button"
import { Header } from "../../Componentes/Header"
import { Input } from "../../Componentes/Input"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom"
import {Column, CriarText, Container, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./style"

import {api} from "../../services/api"

const schema = yup.object({
    email: yup.string().email("Email não valido").required('Campo Obrigatorio'),
    password: yup.string().min(3, "No minimo 3 caracteres").required('Senha Obrigatorio'),
  }).required();



const Login = () =>{
    const navegate = useNavigate();

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange', 
    });

    const onSubmit = async formData => {
        try {
            const {data} = await api.get(`users?email${formData.email}&senha=${formData.password}`)
            console.log("retorno api", data)
            if(data.length == 1){
                navegate("/feed")
            } else {
                alert("Usuario não encontrado")
            }
        } catch (error) {   
            alert("Houve um erro, tente novamente")
            
        }
    };



    const handleClickSingIn  = () => {
        navegate("/feed")
    } 

    return(
        <div>
        <Header/>
        <Container>
            <Column>
                <Title> 
                    A plataforma para você aprender! 
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu Cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login and make the chande.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" leftIcon={<MdEmail/>}></Input>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}></Input>
                        <Button title="Entrar" variant="secondary"  type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha Senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
            
        </Container>
        </div>
    )
}
export {Login}