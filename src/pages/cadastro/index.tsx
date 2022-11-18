import { MdEmail, MdLock, MdDriveFileRenameOutline} from "react-icons/md"
import { Button } from "../../Componentes/Button"
import { Header } from "../../Componentes/Header"
import { Input } from "../../Componentes/Input"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom"
import {Column, CriarText, Container, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./style"
import { IFormData } from "./types";
import { api } from "../../services/api";



const schema = yup.object({
    nome: yup.string().required("Campo Obrigatorio"),
    email: yup.string().email("Email não valido").required('Campo Obrigatorio'),
    password: yup.string().min(3, "No minimo 3 caracteres").required('Senha Obrigatorio'),
  }).required();



const Cad = () => {

    const navegate = useNavigate();
    const onSubmit = async (formData: IFormData) => {
        
        try {
            const {data} = await api.post("users",{
                nome: formData.nome,
                email: formData.email,
                senha: formData.password
            })
            console.log("retorno api", data, api.get(`users?email`) )
            if(data.email == api.get(`users?email`)){
                alert("Texto")
            } else {
                navegate("/Login")
            }
        } catch (error) {   
            alert("Houve um erro, tente novamente")
            
        }
    };
    

    const { control, handleSubmit, formState: {errors} } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange', 
    });

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
                    <SubtitleLogin>Faça seu cadastro and make the chande.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome"  errorMessage={errors?.nome?.message}control={control} placeholder="Nome" leftIcon={<MdDriveFileRenameOutline/>}></Input>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" leftIcon={<MdEmail/>}></Input>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}></Input>
                        <Button title="Cadastrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <CriarText></CriarText>
                        <CriarText href="/login">Já possuo Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </div>
    )
}

export {Cad}