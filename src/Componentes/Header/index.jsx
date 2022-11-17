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
const Header = ({autenticado}) =>{

    const navegate = useNavigate();

    const handleClickSingIn  = () => {
        navegate("/login")
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
                        <Button title="Cadastrar"/>
                    </>
                    )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}