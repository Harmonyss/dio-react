import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../Componentes/Button"
import { Header } from "../../Componentes/Header"
import {Container, Title, TitleHighlight, TextContent} from "./style"

const Home = () =>{

    const navegate = useNavigate();

    const handleClickSingIn  = () => {
        navegate("/login")
    }

    return(
        <div>
        <Header/>
        <Container>
            <div>
                <Title> 
                    <TitleHighlight>
                    Implemente
                    <br/>
                    </TitleHighlight>
                    o seu futuro global, agora! 
                </Title>
                <TextContent>
                    Domine as tecnologias!
                </TextContent>
                <Button title="Comecar Agora" variant="secundary" onClick={handleClickSingIn}/>
            </div>
            <div>
                <img src="" alt="Imagem Principal"/>
            </div>
        </Container>
        </div>
    )
}
export {Home}