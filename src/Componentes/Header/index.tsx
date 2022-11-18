import React from "react";

import { useNavigate } from "react-router-dom";
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UsePicture,
    Wrapper
} from "./styles"
import { Button } from "../Button";
import {IHeader} from "./types"

const Header = ({autenticado}: IHeader) =>{

    const navegate = useNavigate();

    const handleClickSingIn  = () => {
        navegate("/login")
    } 

    const handleClickCadastrar = () => {
        navegate("/cadastro")
    }
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src="" alt="Logo"/>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null }
                </Row>
                <Row>
                    {autenticado ? (
                        <UsePicture/>
                    ) : (
                    <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSingIn}/>
                        <Button title="Cadastrar" onClick={handleClickCadastrar}/>
                    </>
                    )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}