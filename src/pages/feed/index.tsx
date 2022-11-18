import React from "react"
import { Card } from "../../Componentes/Card"
import { Header } from "../../Componentes/Header"
import { UserInfo } from "../../Componentes/UserInfo"
import {Container, Columns, Title, TitleHighlight} from "./style"

const Feed = () =>{
    return(
        <div>
        <Header autenticado={true}/>
        <Container>
            <Columns flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Columns>
            <Columns flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={40} nome="Lucas Souza Macedo"/>
                <UserInfo percentual={80} nome="Amanda Rosa"/>
                <UserInfo percentual={75} nome="Rafaela Sanatana"/>
                <UserInfo percentual={20} nome="Luana Dias"/>
                <UserInfo percentual={10} nome="Jaqueline Ambrosio"/>
            </Columns>
            
        </Container>
        </div>
    )
}
export {Feed}