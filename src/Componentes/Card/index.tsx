import React from "react";
import {Cardcontainer, Content, HasInfo, ImageBackground,  PostInfo, UsePicture, UserInfo } from "./style"
import {FiThumbsUp} from "react-icons/fi"


const Card = () => {
    return (
        <Cardcontainer>
            <ImageBackground/>
            <Content>
                <UserInfo>
                    <UsePicture/>
                    <div>
                        <h4>Lucas Souza Macedo</h4>
                        <p>Há 10 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto DIO</h4>
                    <p>Projeto  do Bootcamp <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JAVASCRIPT</h4>
                    <p>
                        <FiThumbsUp/> 10
                    </p>
                </HasInfo>
            </Content>
        </Cardcontainer>

    )
}

export {Card}